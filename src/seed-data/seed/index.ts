import { Option } from 'src/option/option.entity';
import { Question } from 'src/question/question.entity';
import { Survey } from 'src/survey/survey.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class RootSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const surveyFactory = factoryManager.get(Survey);
    const questionFactory = factoryManager.get(Question);
    const optionFactory = factoryManager.get(Option);

    const surveyList = await surveyFactory.saveMany(3000);
    let questionPendingList = [];
    let optionPendingList = [];

    for (const survey of surveyList) {
      [1, 2, 3, 4, 5].forEach((num) => {
        const newQuestion = questionFactory.save({
          survey_id: survey.id,
          question_number: num,
        });
        questionPendingList.push(newQuestion);
      });
    }

    const questionList = await Promise.all(questionPendingList);
    for (const question of questionList) {
      [1, 2, 3, 4].forEach((num) => {
        const newOption = optionFactory.save({
          question_id: question.id,
          option_number: num,
        });
        optionPendingList.push(newOption);
      });
    }

    await Promise.all(optionPendingList);
  }
}
