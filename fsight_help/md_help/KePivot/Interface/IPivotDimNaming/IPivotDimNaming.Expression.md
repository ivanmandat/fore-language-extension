# IPivotDimNaming.Expression

IPivotDimNaming.Expression
-


# IPivotDimNaming.Expression


## Синтаксис


Expression: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Expression возвращает
 выражение, по которому будет формироваться наименование элементов измерения.


## Комментарии


Если свойство возвращает пустое значение, значит в качестве наименования
 элементов измерения используется атрибут «Наименование».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных.


Sub Button1OnClick(Sender:
 Object; Args: IMouseEventArgs);


Var


Eax: IEaxAnalyzer;


Pivot: IPivot;


PivotDim: IPivotDimension;


Naming: IPivotDimNaming;


S: String;


Begin


Eax := UiErAnalyzer1.ErAnalyzer;


Pivot := Eax.Pivot;


PivotDim := Pivot.Dimensions.Item(0);


Naming := PivotDim.Namings.Item(0);


S := Naming.Expression.AsString;


End Sub
 Button1OnClick;


После выполнения примера, в переменной «S» будет храниться первое выражение,
 определяющее наименование элементов первого измерения.


См. также:


[IPivotDimNaming](IPivotDimNaming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
