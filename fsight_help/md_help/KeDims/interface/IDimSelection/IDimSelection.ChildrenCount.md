# IDimSelection.ChildrenCount

IDimSelection.ChildrenCount
-


# IDimSelection.ChildrenCount


## Синтаксис


ChildrenCount(Element: Integer; Recursive: Boolean):
 Integer;


## Параметры


Element. Индекс элемента справочника.


Recursive. Параметр, определяющий,
 будут ли при подсчете учитываться дочерние элементы, находящиеся на всех
 нижних уровнях. Если в качестве значения передается значение True,
 то учитываются все дочерние элементы на всех уровнях. Если передается
 значение False, то учитываются
 непосредственные дочерние элементы, расположенные на один уровень ниже
 элемента Element.


## Описание


Метод ChildrenCount возвращает
 для элемента Element количество
 дочерних элементов входящих в отметку.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiDimension
 с наименованием «UiDimension1» и каких-либо визуальных компонентов, для
 которых «UiDimension1» установлен в качестве источника данных. К «UiDimension1»
 подключен какой-либо справочник репозитория.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Sel: IDimSelection;

Begin

    Sel := UiDimension1.Selection;

    Debug.WriteLine(Sel.ChildrenCount(Sel.Element(0), True));

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в консоль среды разработки
 будет выведены общее количество отмеченных дочерних элементов для первого
 элемента, входящего в отметку.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
