# IMetaMember.DecCountTotal

IMetaMember.DecCountTotal
-


# IMetaMember.DecCountTotal


## Синтаксис


DecCountTotal(Decrement: Integer; Recursive: Boolean;[
 PrevLevelIndex: Integer = -1]);


## Параметры


Decrement - количество сокращаемых
 элементов.


Recursive - параметр, определяющий
 исключать ли из иерархии элементы, находящиеся на всех нижних уровнях
 текущего элемента. True - из иерархии
 исключаются элементы, расположенные на нижних уровнях; False
 - дочерние элементы не исключаются из иерархии.


PrevLevelIndex - индекс предыдущего
 уровня. Необязательный параметр. Значение по умолчанию - «-1».


## Описание


Метод DecCountTotal уменьшает
 иерархию на заданное число элементов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1», компонента MetaAttributesBreadcrumb
 и компонента MetaAttributesTreeList с наименованием «MetaAttributesTreeList1».
 Данные компоненты настроены на работу с какой-либо базой данных временных
 рядов.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    SelNodes: Array;

	    MembersSet: IMetaMembersSet;

	    Member: IMetaMember;

	Begin

	    SelNodes := MetaAttributesTreeList1.GetSelectedNodes;

	    MembersSet := MetaAttributesTreeList1.GetNodesMembers(SelNodes);

	    MembersSet.Reset;

	    While Not MembersSet.Eof Do

	        Member := MembersSet.Current;

	        Member.DecCountTotal(1, True);

	        MembersSet.Next;

	    End While;

	End Sub Button1OnClick;


После выполнения примера иерархия будет сокращена на выделенное число
 элементов.


См. также:


[IMetaMember](IMetaMember.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
