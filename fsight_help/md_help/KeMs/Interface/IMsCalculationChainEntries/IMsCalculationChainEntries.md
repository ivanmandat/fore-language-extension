# IMsCalculationChainEntries

IMsCalculationChainEntries
-


# IMsCalculationChainEntries


Сборка: Ms;


## Описание


Интерфейс IMsCalculationChainEntries
 предназначен для работы с коллекцией элементов, которые образуют [цепочку
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


## Иерархия наследования


           IMsCalculationChainEntries


## Комментарии


Цепочка расчёта может содержать следующие элементы:


		 Элемент цепочки расчёта
		 Метод IMsCalculationChainEntries для добавления элемента в
		 цепочку
		 Интерфейс для работы с элементом


		 Модель
		 [AddModel](IMsCalculationChainEntries.AddModel.htm)
		 [IMsCalculationChainModel](../IMsCalculationChainModel/IMsCalculationChainModel.htm)


		 Внутренняя модель
		 [AddExclusiveModel](IMsCalculationChainEntries.AddExclusiveModel.htm)
		 [IMsCalculationChainModel](../IMsCalculationChainModel/IMsCalculationChainModel.htm)


		 Метамодель
		 [AddMetaModel](IMsCalculationChainEntries.AddMetaModel.htm)
		 [IMsCalculationChainMetaModel](../IMsCalculationChainMetaModel/IMsCalculationChainMetaModel.htm)


		 Папка
		 [AddFolder](IMsCalculationChainEntries.AddFolder.htm)
		 [IMsCalculationChainFolder](../IMsCalculationChainFolder/IMsCalculationChainFolder.htm)


		 Условие
		 [AddBranch](IMsCalculationChainEntries.AddBranch.htm)
		 [IMsCalculationChainBranch](../IMsCalculationChainBranch/IMsCalculationChainBranch.htm)


		 Цикл
		 [AddIterator](IMsCalculationChainEntries.AddIterator.htm)
		 [IMsCalculationChainIterator](../IMsCalculationChainIterator/IMsCalculationChainIterator.htm)


		 Целевая задача
		 [AddTargetProblem](IMsCalculationChainEntries.AddTargetProblem.htm)
		 [IMsCalculationChainTarget](../IMsCalculationChainTarget/IMsCalculationChainTarget.htm)


		 Траектория целевой функции
		 [AddTargetTrajectory](IMsCalculationChainEntries.AddTargetTrajectory.htm)
		 [IMsCalculationChainTargetTrajectory](../IMsCalculationChainTargetTrajectory/IMsCalculationChainTargetTrajectory.htm)


		 Ограничение целевой функции
		 [AddTargetConstraint](IMsCalculationChainEntries.AddTargetConstraint.htm)
		 [IMsCalculationChainTargetConstraint](../IMsCalculationChainTargetConstraint/IMsCalculationChainTargetConstraint.htm)


		 Система уравнений
		 -
		 [IMsCalculationChainSystem](../IMsCalculationChainSystem/IMsCalculationChainSystem.htm)


		 Переменная
		 -
		 [IMsCalculationChainVariable](../IMsCalculationChainVariable/IMsCalculationChainVariable.htm)


		 Многомерный итератор
		 [AddMultiDimIterator](IMsCalculationChainEntries.AddMultiDimIterator.htm)
		 [IMsCalculationChainMultiDimIterator](../IMsCalculationChainMultiDimIterator/IMsCalculationChainMultiDimIterator.htm)


		 Пользовательская задача оптимизации
		 [AddUserOptimizationProblem](IMsCalculationChainEntries.AddUserOptimizationProblem.htm)
		 [IMsCalculationChainUserOptimization](../IMsCalculationChainUserOptimization/IMsCalculationChainUserOptimization.htm)


		 Ограничение пользовательской задачи оптимизации.
		 [AddUserOptimizationConstraint](IMsCalculationChainEntries.AddUserOptimizationConstraint.htm)
		 [IMsCalculationChainUserOptimizationConstraint](../IMsCalculationChainUserOptimizationConstraint/IMsCalculationChainUserOptimizationConstraint.htm)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IMsCalculationChainEntries.Count.htm)
		 Свойство Count возвращает
		 количество элементов, содержащихся в данном подкаталоге [цепочки
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm).


		 ![](../../Property_Image.gif)
		 [Item](IMsCalculationChainEntries.Item.htm)
		 Свойство Item возвращает
		 элемент [цепочки
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm).


		 ![](../../Property_Image.gif)
		 [ParentEntry](IMsCalculationChainEntries.ParentEntry.htm)
		 Свойство ParentEntry
		 возвращает родительский элемент подкаталога в [цепочке
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddBranch](IMsCalculationChainEntries.AddBranch.htm)
		 Метод AddBranch добавляет
		 условие в [цепочку
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


		 ![](../../Sub_Image.gif)
		 [AddExclusiveModel](IMsCalculationChainEntries.AddExclusiveModel.htm)
		 Метод AddExclusiveModel
		 добавляет внутреннюю модель в [цепочку
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


		 ![](../../Sub_Image.gif)
		 [AddFolder](IMsCalculationChainEntries.AddFolder.htm)
		 Метод AddFolder добавляет
		 папку в [цепочку
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


		 ![](../../Sub_Image.gif)
		 [AddIterator](IMsCalculationChainEntries.AddIterator.htm)
		 Метод AddIterator добавляет
		 цикл в [цепочку
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


		 ![](../../Sub_Image.gif)
		 [AddMetaModel](IMsCalculationChainEntries.AddMetaModel.htm)
		 Метод AddMetaModel
		 добавляет метамодель в [цепочку
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


		 ![](../../Sub_Image.gif)
		 [AddModel](IMsCalculationChainEntries.AddModel.htm)
		 Метод AddModel добавляет
		 модель в [цепочку
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


		 ![](../../Sub_Image.gif)
		 [AddMultiDimIterator](IMsCalculationChainEntries.AddMultiDimIterator.htm)
		 Метод AddMultiDimIterator
		 добавляет в [цепочку
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) многомерный итератор.


		 ![](../../Sub_Image.gif)
		 [AddTargetConstraint](IMsCalculationChainEntries.AddTargetConstraint.htm)
		 Метод AddTargetConstraint
		 добавляет в [цепочку
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) ограничение к указанной целевой функции.


		 ![](../../Sub_Image.gif)
		 [AddTargetProblem](IMsCalculationChainEntries.AddTargetProblem.htm)
		 Метод AddTargetProblem
		 добавляет целевую функцию в [цепочку
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


		 ![](../../Sub_Image.gif)
		 [AddTargetTrajectory](IMsCalculationChainEntries.AddTargetTrajectory.htm)
		 Метод AddTargetTrajectory
		 добавляет траекторию к указанной целевой функции.


		 ![](../../Sub_Image.gif)
		 [AddUserOptimizationConstraint](IMsCalculationChainEntries.AddUserOptimizationConstraint.htm)
		 Метод AddUserOptimizationConstraint
		 добавляет в цепочку расчёта ограничение пользовательской задачи
		 оптимизации.


		 ![](../../Sub_Image.gif)
		 [AddUserOptimizationProblem](IMsCalculationChainEntries.AddUserOptimizationProblem.htm)
		 Метод AddUserOptimizationProblem
		 добавляет в цепочку расчёта пользовательскую задачу оптимизации.


		 ![](../../Sub_Image.gif)
		 [ArrangeModels](IMsCalculationChainEntries.ArrangeModels.htm)
		 Метод ArrangeModels
		 автоматически выстраивает [цепочку
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) моделей по заданным параметрам в соответствии
		 с зависимостями между переменными.


		 ![](../../Sub_Image.gif)
		 [Clear](IMsCalculationChainEntries.Clear.htm)
		 Метод Clear очищает
		 [цепочку
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


		 ![](../../Sub_Image.gif)
		 [FindByCoord](IMsCalculationChainEntries.FindByCoord.htm)
		 Метод FindByCoord осуществляет
		 поиск элементов цепочки расчёта использующих указанную точку источника
		 данных.


		 ![](../../Sub_Image.gif)
		 [FindById](IMsCalculationChainEntries.FindById.htm)
		 Метод FindById осуществляет
		 поиск элемента [цепочки
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) по идентификатору.


		 ![](../../Sub_Image.gif)
		 [FindByKey](IMsCalculationChainEntries.FindByKey.htm)
		 Метод FindByKey осуществляет
		 поиск элемента [цепочки
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) по ключу.


		 ![](../../Sub_Image.gif)
		 [IndexOf](IMsCalculationChainEntries.IndexOf.htm)
		 Метод IndexOf возвращает
		 индекс элемента [цепочки
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm).


		 ![](../../Sub_Image.gif)
		 [MoveTo](IMsCalculationChainEntries.MoveTo.htm)
		 Метод MoveTo перемещает
		 элемент [цепочки
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) в указанную позицию.


		 ![](../../Sub_Image.gif)
		 [Remove](IMsCalculationChainEntries.Remove.htm)
		 Метод Remove удаляет
		 элемент [цепочки
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) по индексу.


		 ![](../../Sub_Image.gif)
		 [RemoveByKey](IMsCalculationChainEntries.RemoveByKey.htm)
		 Метод RemoveByKey удаляет
		 элемент [цепочки
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) по ключу.


		 ![](../../Sub_Image.gif)
		 [Visit](IMsCalculationChainEntries.Visit.htm)
		 Метод Visit выполняет
		 пользовательские обработчики для всех элементов цепочки расчета.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
