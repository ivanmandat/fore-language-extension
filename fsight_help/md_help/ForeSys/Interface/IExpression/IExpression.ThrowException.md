# IExpression.ThrowException

IExpression.ThrowException
-


# IExpression.ThrowException


## Синтаксис


ThrowException: Boolean;


## Описание


Свойство ThrowException определяет,
 будет ли генерироваться исключительная ситуация платформы при наличии
 ошибок в разбираемом выражении.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Если во время разбора выражения возникла ошибка, то будет генерироваться
	 исключительная ситуация платформы, которую можно обработать в операторе
	 [Try … End Try](Fore.chm::/08_Operators/Fore_Try.htm);


	- False. При разборе некорректного
	 выражения исключительная ситуация генерироваться не будет. Для проверки
	 корректности выражения используйте свойство [IExpression.Valid](IExpression.Valid.htm).


При любом значении данного свойства, если при разборе выражения возникла
 ошибка, то данная ошибка будет доступна в свойстве [IExpressionErrorInfo.Exception](../IExpressionErrorInfo/IExpressionErrorInfo.Exception.htm).


## Пример


Для выполнения примера предполагается наличие на форме двух кнопок с
 наименованиями Button1 и Button2 и компонента ExpressionEdit с наименованием
 ExpressionEdit1. В репозитории имеется таблица с идентификатором «Table_1».
 Последнее поле таблицы является вычисляемым.


Пример является обработчиком события OnClick для компонентов Button1
 и Button2.


Добавьте ссылки на системные сборки: Db, ExtCtrls, Forms, Metabase,
 Ui.


	Class TestForm: Form

	    Button1: Button;

	    Button2: Button;

	    ExpressionEdit1: ExpressionEdit;

	    Tab: ITable;

	    Field: ITableField;


	// Подключение компонента «ExpressionEdit1» к выражению вычисляемого поля таблицы

	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	Begin

	    MB := MetabaseClass.Active;

	    Tab := MB.ItemById("Table_1").Edit As ITable;

	    Field := Tab.Fields.Item(Tab.Fields.Count - 1);

	    ExpressionEdit1.Expression := Field.Expression;

	End Sub Button1OnClick;


	// Проверка корректности введенного выражения для использования в вычисляемом поле таблицы

	Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Expr: IExpression;

	    ErrInfo: IExpressionErrorInfo;

	Begin

	    Expr := ExpressionEdit1.Expression;

	    Expr.ThrowException := False;

	    Expr.AsString := ExpressionEdit1.Formula;

	    If Not Expr.Valid Then

	    ErrInfo :=Expr.ErrorInfo;

	    WinApplication.ErrorBox("При разборе выражения возникла ошибка: " + ErrInfo.ErrorMessage + "." + #10 + #13 + "Позиция: " + ErrInfo.Position.ToString);

	    Else

	        Field.Expression.AsString := Expr.AsString;

	        (Tab As IMetabaseObject).Save;

	    End If;

	End Sub Button2OnClick;


	End Class TestForm;


При выполнении формы, после нажатия кнопки «Button1»
 компонент «ExpressionEdit1» будет подключен к выражению вычисляемого поля
 таблицы. После редактирования выражения в компоненте «ExpressionEdit1»,
 при нажатии на кнопку «Button2» будет осуществляться проверка корректности
 введенного выражения для использования в вычисляемом поле таблицы. Если
 выражение корректно, то оно будет обновлено в вычисляемом поле таблицы
 и таблица будет сохранена. Если введенное выражение некорректно, то на
 экран будет выведено сообщение, содержащее текст и номер позиции, в которой
 возникла ошибка. При некорректном выражении исключительная ситуация платформы
 возникать не будет.


См. также:


[IExpression](IExpression.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
