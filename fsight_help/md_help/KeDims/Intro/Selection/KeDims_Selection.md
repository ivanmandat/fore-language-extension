# Отметка справочника

Отметка справочника
-


# Отметка справочника


Различные объекты, в которых используются справочники, оперируют таким
 объектом как отметка справочника.
 Отметка справочника - это коллекция
 элементов справочника, которая будет использоваться при расчетах. Для
 работы с отметкой предназначен интерфейс [IDimSelection](../../interface/IDimSelection/IDimSelection.htm).
 Для создания отметки справочника используется метод [CreateSelection](../../interface/IDimInstance/IDimInstance.CreateSelection.htm).


	Var

	    MB: IMetabase;

	    DimInst: IDimInstance;

	    Selection: IDimSelection;

	Begin

	    MB := MetabaseClass.Active;

	    DimInst := MB.ItemById("Dim_1").Open(Null) As IDimInstance;

	    Selection := DimInst.CreateSelection;


Для изменения списка элементов в отметке используются различные методы
 Select* и Deselect*
 интерфейса [IDimSelection](../../interface/IDimSelection/IDimSelection.htm).


Var

    //...

    Selection: IDimSelection;

Begin

    //...

    Selection.DeselectAll;

    Selection.SelectElement(0, False);

    Selection.SelectElement(3, True);

    Selection.SelectChildren(5, False);


Все методы оперируют сквозными индексами
 элементов. Для получения сквозных индексов элементов рекомендуется использовать
 различные виды поиска, описанные в разделе [Поиск
 элементов](../Instance/KeDims_FindElement.htm). Поиск с настройкой условий поиска позволяет напрямую изменять
 отметку найденных элементов. Для получения сквозного
 индекса элемента в справочнике по индексу элемента в отметке используйте
 свойство [Element](../../interface/IDimSelection/IDimSelection.Element.htm).


Сформированная отметка может быть установлена для какого-либо компонента,
 элемента управления или передана в пользовательский метод для использования
 в расчетах.


Отметку можно сохранить, и в дальнейшем при необходимости восстановить.
 Для этого предназначены методы [ToVariant](../../interface/IDimSelection/IDimSelection.ToVariant.htm),
 [Parse](../../interface/IDimSelection/IDimSelection.Parse.htm),
 [AttributeToVariant](../../interface/IDimSelection/IDimSelection.AttributeToVariant.htm),
 [ParseAttribute](../../interface/IDimSelection/IDimSelection.ParseAttribute.htm).
 Пример по сохранению и восстановлению отметки представлен в разделе [Примеры: Сериализация
 отметки справочника](../../Samples/KeDims_Sample_WorkSelection.htm).


Свойства интерфейса [IDimSelection](../../interface/IDimSelection/IDimSelection.htm)
 позволяют получить список отмеченных элементов в иной форме:


	- [Group](../../interface/IDimSelection/IDimSelection.Group.htm)
	 - группа отмеченных элементов, реализуемая интерфейсом [IDimElementGroup](../../interface/IDimElementGroup/IDimElementGroup.htm).


	- [Iterator](../../interface/IDimSelection/IDimSelection.Iterator.htm)
	 - итератор, используемый для навигации по отмеченным элементам. Для
	 работы с итератором используется цикл [While](Fore.chm::/08_Operators/Fore_For.htm).


	- [SelectedElementArray](../../interface/IDimSelection/IDimSelection.SelectedElementArray.htm)
	 - возвращает отмеченные элементы в виде массива, реализуемого интерфейсом
	 [IDimElementArray](../../interface/IDimElementArray/IDimElementArray.htm).


См. также:


[Введение](../KeDims_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
