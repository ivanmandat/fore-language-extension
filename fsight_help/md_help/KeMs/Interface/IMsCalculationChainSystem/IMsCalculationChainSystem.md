# IMsCalculationChainSystem

IMsCalculationChainSystem
-


# IMsCalculationChainSystem


Сборка: Ms;


## Описание


Интерфейс IMsCalculationChainSystem
 предназначен для работы с системой уравнений, содержащейся в [цепочке
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


## Иерархия наследования


           [IMsCalculationChainEntry](../IMsCalculationChainEntry/IMsCalculationChainEntry.htm)


           [IMsCalculationChainModel](../IMsCalculationChainModel/IMsCalculationChainModel.htm)


           IMsCalculationChainSystem


## Комментарии


Для получения системы уравнений приведите объект интерфейса [IMsCalculationChainEntry](../IMsCalculationChainEntry/IMsCalculationChainEntry.htm) к интерфейсу
 IMsCalculationChainSystem. Операция
 допустима, если [IMsCalculationChainEntry.Type](../IMsCalculationChainEntry/IMsCalculationChainEntry.Type.htm) = [MsCalculationChainEntryType.System](../../Enums/MsCalculationChainEntryType.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Models](IMsCalculationChainSystem.Models.htm)
		 Свойство Models возвращает
		 модели, входящие в систему уравнений.


## Свойства, унаследованные от [IMsCalculationChainModel](../IMsCalculationChainModel/IMsCalculationChainModel.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [IsExclusive](../IMsCalculationChainModel/IMsCalculationChainModel.IsExclusive.htm)


		 Свойство IsExclusive
		 возвращает признак внутренности модели по отношению к
		 [цепочке
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm).


		 ![](../../Property_Image.gif)
		 [Model](../IMsCalculationChainModel/IMsCalculationChainModel.Model.htm)


		 Свойство Model возвращает
		 модель, содержащуюся в [цепочке
		 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm) метамодели.


		 ![](../../Property_Image.gif)
		 [ModelDescriptor](../IMsCalculationChainModel/IMsCalculationChainModel.ModelDescriptor.htm)


		 Свойство ModelDescriptor
		 возвращает описание модели как объекта репозитория.


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddModel](IMsCalculationChainSystem.AddModel.htm)
		 Метод AddModel добавляет
		 указанную модель в систему уравнений.


		 ![](../../Sub_Image.gif)
		 [RemoveModel](IMsCalculationChainSystem.RemoveModel.htm)
		 Метод RemoveModel удаляет
		 указанную модель из системы уравнений.


## Методы, унаследованные от [IMsCalculationChainModel](../IMsCalculationChainModel/IMsCalculationChainModel.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [EditModel](../IMsCalculationChainModel/IMsCalculationChainModel.EditModel.htm)


		 Метод EditModel открывает
		 модель для редактирования.


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
