# IMsCalculationChainMetaModel

IMsCalculationChainMetaModel
-


# IMsCalculationChainMetaModel


Сборка: Ms;


## Описание


Интерфейс IMsCalculationChainMetaModel
 содержит свойства метамодели, содержащейся в [цепочке
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm).


## Иерархия наследования


           [IMsCalculationChainEntry](../IMsCalculationChainEntry/IMsCalculationChainEntry.htm)


           IMsCalculationChainMetaModel


## Комментарии


Для создания метамодели в цепочке расчёта используйте метод [IMsCalculationChainEntries.AddMetaModel](../IMsCalculationChainEntries/IMsCalculationChainEntries.AddMetaModel.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [EditMetaModel](IMsCalculationChainMetaModel.EditMetaModel.htm)
		 Свойство EditMetaModel
		 возвращает метамодель, открытую на редактирование.


		 ![](../../Property_Image.gif)
		 [MetaModel](IMsCalculationChainMetaModel.MetaModel.htm)
		 Свойство MetaModel
		 возвращает метамодель, содержащуюся в [цепочке
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


		 ![](../../Property_Image.gif)
		 [MetaModelDescriptor](IMsCalculationChainMetaModel.MetaModelDescriptor.htm)
		 Свойство MetaModelDescriptor
		 возвращает описание метамодели как объекта репозитория.


		 ![](../../Property_Image.gif)
		 [ParamsControl](IMsCalculationChainMetaModel.ParamsControl.htm)
		 Свойство ParamsControl
		 возвращает коллекцию контролируемых параметров метамодели, содержащейся
		 в [цепочке
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm).


		 ![](../../Property_Image.gif)
		 [SeparateDataLoading](IMsCalculationChainMetaModel.SeparateDataLoading.htm)
		 Свойство SeparateDataLoading
		 определяет признак загрузки данных отдельно от остальной задачи.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ResetMetaModel](IMsCalculationChainMetaModel.ResetMetaModel.htm)
		 Метод ResetMetaModel
		 обновляет метамодель в [цепочке
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm).


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
