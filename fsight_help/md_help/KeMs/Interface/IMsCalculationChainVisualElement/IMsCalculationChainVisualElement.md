# IMsCalculationChainVisualElement

IMsCalculationChainVisualElement
-


# IMsCalculationChainVisualElement


Сборка: Ms;


## Описание


Интерфейс IMsCalculationChainVisualElement
 предназначен для работы с визуальным элементом, содержащимся в [цепочке
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


## Иерархия наследования


           [IMsCalculationChainEntry](../IMsCalculationChainEntry/IMsCalculationChainEntry.htm)


           IMsCalculationChainVisualElement


## Комментарии


К визуальным элементам относятся прямоугольники и надписи. Создание
 визуальных элементов доступно только из веб-приложения.


Для получения визуального элемента приведите объект интерфейса [IMsCalculationChainEntry](../IMsCalculationChainEntry/IMsCalculationChainEntry.htm)
 к интерфейсу IMsCalculationChainVisualElement.
 Операция допустима, если [IMsCalculationChainEntry.Type](../IMsCalculationChainEntry/IMsCalculationChainEntry.Type.htm) = [MsCalculationChainEntryType.VisualElement](../../Enums/MsCalculationChainEntryType.htm).


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
