# IExpression.ErrorInfo

IExpression.ErrorInfo
-


# IExpression.ErrorInfo


## Синтаксис


ErrorInfo: [IExpressionErrorInfo](../IExpressionErrorInfo/IExpressionErrorInfo.htm);


## Описание


Свойство ErrorInfo возвращает
 информацию об ошибке, которая может возникнуть при разборе выражения.


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней двух кнопок с наименованиями «Button1» и «Button2» и компонента ExpressionEdit
 с наименованием «ExpressionEdit1». В репозитории имеется таблица с идентификатором
 «Table_1». Последнее поле таблицы является вычисляемым.


	Class TestForm: Form

	    Button1: Button;

	    Button2: Button;

	    ExpressionEdit1: ExpressionEdit;

	    MB: IMetabase;

	    Tab: ITable;

	    Field: ITableField;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Begin

	        MB := MetabaseClass.Active;

	        Tab := MB.ItemById("Table_1").Edit As ITable;

	        Field := Tab.Fields.Item(Tab.Fields.Count - 1);

	        ExpressionEdit1.Expression := Field.Expression;

	    End Sub Button1OnClick;


	    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        Expr: IExpression;

	        ErrInfo: IExpressionErrorInfo;

	    Begin

	        Expr := ExpressionEdit1.Expression;

	        Expr.ThrowException := False;

	        Expr.AsString := ExpressionEdit1.Formula;

	        If Not Expr.Valid Then

	            ErrInfo := Expr.ErrorInfo;

	            WinApplication.ErrorBox("При разборе выражения возникла ошибка: "

	                + ErrInfo.ErrorMessage + "." + #10 + #13 + "Позиция: " + ErrInfo.Position.ToString);

	        Else

	            Field.Expression.AsString := Expr.AsString;

	            (Tab As IMetabaseObject).Save;

	        End If;

	    End Sub Button2OnClick;

	End Class TestForm;


При выполнении формы, после нажатия кнопки «Button1» компонент «ExpressionEdit1»
 будет подключен к выражению вычисляемого поля таблицы. После редактирования
 выражения в компоненте «ExpressionEdit1», при нажатии на кнопку «Button2»,
 будет осуществляться проверка корректности введённого выражения для использования
 в вычисляемом поле таблицы. Если выражение корректно, то оно будет обновлено
 в вычисляемом поле и таблица будет сохранена. Если введённое выражение
 некорректно, то на экран будет выведено сообщение, содержащее текст и
 номер позиции, в которой возникла ошибка при разборе выражения. При некорректном
 выражении исключительная ситуация платформы возникать не будет.


См. также:


[IExpression](IExpression.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
