# IMetaAttributesTreeList.GetSelectedMembers

IMetaAttributesTreeList.GetSelectedMembers
-


# IMetaAttributesTreeList.GetSelectedMembers


## Синтаксис


GetSelectedMembers(FactorsOnly: Boolean; AddDimChildren:
 Boolean; AddOnlyChild: Boolean): [IMetaMembersSet](KeRds.chm::/Interface/IMetaMembersSet/IMetaMembersSet.htm);


## Параметры


FactorsOnly. Признак получения
 списка только выделенных показателей. True
 - возвращать только выделенные показатели; False
 - возвращать выделенные папки и показатели;


AddDimChildren. Признак рекурсивного
 добавления дочерних элементов. True
 - при выделении папки добавлять в коллекцию ее дочерние показатели; False - возвращать только фактически
 выделенные элементы;


AddOnlyChild. Признак добавления
 только дочерних элементов и исключения исходного элемента. True
 - исключать выделенный элемент (папку) и добавлять только дочерние элементы;
 False - возвращать только фактически
 выделенные элементы.


## Описание


Метод GetSelectedMembers возвращает
 набор отмеченных в компоненте элементов в соответствии с указанными параметрами
 отбора.


## Комментарии


Параметр AddDimChildren
 используется в сочетании с параметром AddOnlyChild.
 При установке параметрам значения True,
 если в компоненте отмечены какие-либо папки, то в результирующий набор
 метода попадут все дочерние показатели этих папок. При этом сами папки
 будут исключены из результирующего набора.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента MetaAttributesBreadcrumb
 и компонента MetaAttributesTreeList с наименованием «MetaAttributesTreeList1».
 Компоненты настроены на работу с какой-либо базой данных временных рядов.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MembersSet: IMetaMembersSet;

	    Member: IMetaMember;

	Begin

	    MembersSet := MetaAttributesTreeList1.GetSelectedMembers(False, True, True);

	    MembersSet.Reset;

	    While Not MembersSet.Eof Do

	        Member := MembersSet.Current;

	        Debug.WriteLine(Member.Name);

	        MembersSet.Next;

	    End While;

	End Sub Button1OnClick;


При нажатии на кнопку в консоль среды разработки будет выведен список
 элементов, выделенных в компоненте. Если выделены папки, то в список будут
 включены их дочерние элементы. Сами папки при этом из списка будут исключены.


См. также:


[IMetaAttributesTreeList](IMetaAttributesTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
