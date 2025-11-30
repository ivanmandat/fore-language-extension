# IMsCalculationChainMultiDimIterator

IMsCalculationChainMultiDimIterator
-


# IMsCalculationChainMultiDimIterator


Сборка: Ms;


## Описание


Интерфейс IMsCalculationChainMultiDimIterator
 предназначен для работы с многомерным итератором.


## Иерархия наследования


           [IMsCalculationChainEntry](../IMsCalculationChainEntry/IMsCalculationChainEntry.htm)


           [IMsCalculationChainGroup](../IMsCalculationChainGroup/IMsCalculationChainGroup.htm)


           [IMsCalculationChainFolder](../IMsCalculationChainFolder/IMsCalculationChainFolder.htm)


           IMsCalculationChainMultiDimIterator


## Комментарии


Характерной особенностью данного итератора является возможность настройки
 сразу на нескольких измерениях и выполнения итераций только по точкам,
 содержащим данные. Использование итератора по данным позволяет сократить
 время расчёта метамодели.


Для добавления многомерного итератора в цепочку расчёта используйте
 метод [IMsCalculationChainEntries.AddMultiDimIterator](../IMsCalculationChainEntries/IMsCalculationChainEntries.AddMultiDimIterator.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Dimensions](IMsCalculationChainMultiDimIterator.Dimensions.htm)
		 Свойство Dimensions
		 возвращает измерения, по которым будет выполняться итерация.


		 ![](../../Property_Image.gif)
		 [IterateByData](IMsCalculationChainMultiDimIterator.IterateByData.htm)
		 Свойство IterateByData
		 возвращает параметры итерации по данным.


		 ![](../../Property_Image.gif)
		 [MultiThreaded](IMsCalculationChainMultiDimIterator.MultiThreaded.htm)
		 Свойство MultiThreaded
		 определяет признак использования многопоточного расчёта многомерного
		 итератора.


		 ![](../../Property_Image.gif)
		 [Stub](IMsCalculationChainMultiDimIterator.Stub.htm)
		 Свойство Stub возвращает
		 источник данных, являющийся основным для итератора.


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


[Интерфейсы
 сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
