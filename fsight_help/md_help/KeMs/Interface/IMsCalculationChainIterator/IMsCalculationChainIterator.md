# IMsCalculationChainIterator

IMsCalculationChainIterator
-


# IMsCalculationChainIterator


Сборка: Ms;


## Описание


Интерфейс IMsCalculationChainIterator
 предназначен для работы с настройками цикла в [цепочке
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


## Иерархия наследования


           [IMsCalculationChainEntry](../IMsCalculationChainEntry/IMsCalculationChainEntry.htm)


           [IMsCalculationChainGroup](../IMsCalculationChainGroup/IMsCalculationChainGroup.htm)


           [IMsCalculationChainFolder](../IMsCalculationChainFolder/IMsCalculationChainFolder.htm)


           IMsCalculationChainIterator


## Комментарии


Для создания цикла в цепочке метамодели используйте метод [IMsCalculationChainEntries.AddIterator](../IMsCalculationChainEntries/IMsCalculationChainEntries.AddIterator.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalendarSettings](IMsCalculationChainIterator.CalendarSettings.htm)
		 Свойство CalendarSettings
		 определяет параметры календаря.


		 ![](../../Property_Image.gif)
		 [ElementGroup](IMsCalculationChainIterator.ElementGroup.htm)
		 Свойство ElementGroup
		 определяет группу элементов, по которой будет рассчитываться цикл.


		 ![](../../Property_Image.gif)
		 [EndDate](IMsCalculationChainIterator.EndDate.htm)
		 Свойство EndDate определяет
		 дату окончания итераций.


		 ![](../../Property_Image.gif)
		 [EndParamID](IMsCalculationChainIterator.EndParamID.htm)
		 Свойство EndParamID
		 определяет параметр, задающий дату окончания итераций.


		 ![](../../Property_Image.gif)
		 [Expression](IMsCalculationChainIterator.Expression.htm)
		 Свойство Expression
		 возвращает условие расчёта цикла.


		 ![](../../Property_Image.gif)
		 [Frequencies](IMsCalculationChainIterator.Frequencies.htm)
		 Свойство Frequencies
		 определяет календарную динамику итераций.


		 ![](../../Property_Image.gif)
		 [MaxIterations](IMsCalculationChainIterator.MaxIterations.htm)
		 Свойство MaxIterations
		 определяет максимальное количество итераций цикла.


		 ![](../../Property_Image.gif)
		 [Parameter](IMsCalculationChainIterator.Parameter.htm)
		 Свойство Parameter
		 определяет параметры метамодели, используемые для расчёта цикла.


		 ![](../../Property_Image.gif)
		 [ParameterAsGroup](IMsCalculationChainIterator.ParameterAsGroup.htm)
		 Свойство ParameterAsGroup
		 определяет идентификатор параметра, задающего элементы, по которым
		 будет рассчитываться цикл.


		 ![](../../Property_Image.gif)
		 [ParameterAsSelection](IMsCalculationChainIterator.ParameterAsSelection.htm)
		 Свойство ParameterAsSelection
		 определяет параметр, являющийся отметкой элементов справочника.


		 ![](../../Property_Image.gif)
		 [PostCondition](IMsCalculationChainIterator.PostCondition.htm)
		 Свойство PostCondition
		 определяет признак расчёта цикла в первый раз без проверки условия
		 выполнения цикла.


		 ![](../../Property_Image.gif)
		 [Selection](IMsCalculationChainIterator.Selection.htm)
		 Свойство Selection
		 определяет отметку, по которой будет рассчитываться цикл.


		 ![](../../Property_Image.gif)
		 [StartDate](IMsCalculationChainIterator.StartDate.htm)
		 Свойство StartDate
		 определяет дату начала итераций.


		 ![](../../Property_Image.gif)
		 [StartParamID](IMsCalculationChainIterator.StartParamID.htm)
		 Свойство StartParamID
		 определяет параметр, задающий дату начала итераций.


		 ![](../../Property_Image.gif)
		 [Step_](IMsCalculationChainIterator.Step_.htm)
		 Свойство Step_
		 определяет шаг расчёта.


		 ![](../../Property_Image.gif)
		 [StepParam](IMsCalculationChainIterator.StepParam.htm)
		 Свойство StepParam
		 определяет параметр, задающий шаг расчёта цикла.


		 ![](../../Property_Image.gif)
		 [Transform](IMsCalculationChainIterator.Transform.htm)
		 Свойство Transform
		 возвращает параметры расчёта условия выполнения цикла.


		 ![](../../Property_Image.gif)
		 [UseDates](IMsCalculationChainIterator.UseDates.htm)
		 Свойство UseDates
		 определяет признак расчёта цикла по датам.


## Свойства, унаследованные от [IMsCalculationChainFolder](../IMsCalculationChainFolder/IMsCalculationChainFolder.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Contents](../IMsCalculationChainFolder/IMsCalculationChainFolder.Contents.htm)
		 Свойство Contents возвращает
		 коллекцию дочерних элементов.


## Свойства, унаследованные от [IMsCalculationChainGroup](../IMsCalculationChainGroup/IMsCalculationChainGroup.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalculationType](../IMsCalculationChainGroup/IMsCalculationChainGroup.CalculationType.htm)
		 Свойство CalculationType
		 определяет режим расчёта группы.


		 ![](../../Property_Image.gif)
		 [Level](../IMsCalculationChainGroup/IMsCalculationChainGroup.Level.htm)
		 Свойство Level определяет
		 динамику расчёта группы.


		 ![](../../Property_Image.gif)
		 [LevelParam](../IMsCalculationChainGroup/IMsCalculationChainGroup.LevelParam.htm)
		 Свойство LevelParam
		 определяет параметр, задающий динамику расчёта группы.


		 ![](../../Property_Image.gif)
		 [OutputPeriod](../IMsCalculationChainGroup/IMsCalculationChainGroup.OutputPeriod.htm)
		 Свойство OutputPeriod
		 возвращает параметры периода выгрузки данных.


		 ![](../../Property_Image.gif)
		 [Period](../IMsCalculationChainGroup/IMsCalculationChainGroup.Period.htm)
		 Свойство Period возвращает
		 параметры периода расчёта группы.


## Свойства, унаследованные от [IMsCalculationChainEntry](../IMsCalculationChainEntry/IMsCalculationChainEntry.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Description](../IMsCalculationChainEntry/IMsCalculationChainEntry.Description.htm)
		 Свойство Description
		 определяет описание элемента [цепочки
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm).


		 ![](../../Property_Image.gif)
		 [Excluded](../IMsCalculationChainEntry/IMsCalculationChainEntry.Excluded.htm)
		 Свойство Excluded определяет
		 признак неиспользования элемента [цепочки](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm)
		 в расчёте метамодели.


		 ![](../../Property_Image.gif)
		 [InheritModelPeriod](../IMsCalculationChainEntry/IMsCalculationChainEntry.InheritModelPeriod.htm)
		 Свойство InheritModelPeriod
		 определяет признак наследования элементом [цепочки](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm)
		 периода и динамики расчёта у родительского элемента.


		 ![](../../Property_Image.gif)
		 [Key](../IMsCalculationChainEntry/IMsCalculationChainEntry.Key.htm)
		 Свойство Key возвращает
		 ключ элемента [цепочки
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm).


		 ![](../../Property_Image.gif)
		 [Name](../IMsCalculationChainEntry/IMsCalculationChainEntry.Name.htm)
		 Свойство Name определяет
		 наименование элемента [цепочки
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm).


		 ![](../../Property_Image.gif)
		 [ParentEntries](../IMsCalculationChainEntry/IMsCalculationChainEntry.ParentEntries.htm)
		 Свойство ParentEntries
		 возвращает объект-родитель.


		 ![](../../Property_Image.gif)
		 [Tag](../IMsCalculationChainEntry/IMsCalculationChainEntry.Tag.htm)
		 Свойство Tag не учитывается
		 компилятором, поэтому может быть использовано пользователем по
		 его усмотрению.


		 ![](../../Property_Image.gif)
		 [Type](../IMsCalculationChainEntry/IMsCalculationChainEntry.Type.htm)
		 Свойство Type возвращает
		 тип элемента [цепочки
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


## Методы, унаследованные от [IMsCalculationChainEntry](../IMsCalculationChainEntry/IMsCalculationChainEntry.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [MoveToParent](../IMsCalculationChainEntry/IMsCalculationChainEntry.MoveToParent.htm)
		 Метод MoveToParent
		 перемещает элемент [цепочки
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
