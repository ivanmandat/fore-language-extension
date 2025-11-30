# IExpression.StringHandler

IExpression.StringHandler
-


# IExpression.StringHandler


## Синтаксис


StringHandler: [IExpressionStringHandler](../IExpressionStringHandler/IExpressionStringHandler.htm);


## Описание


Свойство StringHandler определяет
 объект, используемый для отслеживания преобразования термов, содержащихся
 в выражении.


## Комментарии


В качестве значения свойства необходимо указать экземпляр пользовательского
 класса, который реализует методы интерфейса [IExpressionStringHandler](../IExpressionStringHandler/IExpressionStringHandler.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней кнопок с наименованиями «Button1», «Button2» и компонента ExpressionEdit
 с наименованием «ExpressionEdit1». В репозитории имеется таблица с идентификатором
 «CalcTable». В структуре таблицы имеются поля «VAL1», «VAL2» и «CHECKVALUE».
 Поле «CHECKVALUE» является вычисляемым.


	Class TESTForm: Form

	    Button1: Button;

	    Button2: Button;

	    ExpressionEdit1: ExpressionEdit;


	    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

	    Var

	        MB: IMetabase;

	        Tab: ITable;

	    Begin

	        MB := MetabaseClass.Active;

	        Tab := MB.ItemById("CalcTable").Bind As ITable;

	        ExpressionEdit1.Expression := Tab.Fields.FindById("CHECKVALUE").Expression;

	    End Sub TESTFormOnCreate;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        Expression: IExpression;

	    Begin

	        Expression := ExpressionEdit1.Expression;

	        //Установка обработчика событий

	        Expression.StringHandler := New StrHandler.Create;

	        //Указание новой формулы

	        ExpressionEdit1.Formula := "Iif(VAL1 = VAL2, 0, Iif(VAL1 > VAL2, 1, -1))";

	        //Обновление выражения в ExpressionEdit1.Expression в соответствии с заданной формулой

	        ExpressionEdit1.UpdateExpression;

	    End Sub Button1OnClick;


	    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	    Begin

	        Debug.WriteLine("Выражение: " + ExpressionEdit1.Expression.AsString);

	    End Sub Button2OnClick;

	End Class TESTForm;


	Class StrHandler: Object, IExpressionStringHandler

	    Sub OnTerm(Text: String);

	    Begin

	        Debug.WriteLine("Term: " + Text);

	    End Sub OnTerm;


	    Sub OnText(Text: String);

	    Begin

	        Debug.WriteLine("Text: " + Text);

	    End Sub OnText;

	End Class StrHandler;


При загрузке формы компонент «ExpressionEdit1» будет подключен к выражению,
 по которому рассчитываются значения вычисляемого поле таблицы «CHECKVALUE».
 При нажатии на первую кнопку выражение компонента подписывается на обработчик
 событий StrHandler, задается новая формула и осуществляется обновление
 выражения компонента. При обновлении осуществляется разбор термов, что
 генерирует событие OnTerm. После выполнения метода UpdateExpression выражение
 компонента «ExpressionEdit1.Expression» будет соответствовать формуле
 «ExpressionEdit1.Formula». При нажатии на вторую кнопку в консоль среды
 разработки будет выведено выражение компонента. При обращении к выражению
 также осуществляется его разбор, что приводит к генерации событий OnTerm
 и OnText.


См. также:


[IExpression](IExpression.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
