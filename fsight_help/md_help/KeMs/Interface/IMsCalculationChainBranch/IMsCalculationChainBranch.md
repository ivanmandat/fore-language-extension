# IMsCalculationChainBranch

IMsCalculationChainBranch
-


# IMsCalculationChainBranch


Сборка: Ms;


## Описание


Интерфейс IMsCalculationChainBranch
 предназначен для работы с условием в [цепочке
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


## Иерархия наследования


           [IMsCalculationChainEntry](../IMsCalculationChainEntry/IMsCalculationChainEntry.htm)


           [IMsCalculationChainGroup](../IMsCalculationChainGroup/IMsCalculationChainGroup.htm)


           IMsCalculationChainBranch


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoName](IMsCalculationChainBranch.AutoName.htm)
		 Свойство AutoName определяет
		 признак автоматической генерации наименования для условия в [цепочке
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


		 ![](../../Property_Image.gif)
		 [CaseList](IMsCalculationChainBranch.CaseList.htm)
		 Свойство CaseList возвращает
		 коллекцию веток условия.


		 ![](../../Property_Image.gif)
		 [DefaultContents](IMsCalculationChainBranch.DefaultContents.htm)
		 Свойство DefaultContents
		 возвращает ветку, которая выполняется, если не выполнилась ни
		 одна ветка из коллекции веток условия.


		 ![](../../Property_Image.gif)
		 [ParamAttributes](IMsCalculationChainBranch.ParamAttributes.htm)
		 Свойство ParamAttributes
		 определяет параметр условия.


		 ![](../../Property_Image.gif)
		 [RunAllCompatibleCases](IMsCalculationChainBranch.RunAllCompatibleCases.htm)
		 Свойство RunAllCompatibleCases
		 осуществляет выполнение всех веток, условия которых выполняются.


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
