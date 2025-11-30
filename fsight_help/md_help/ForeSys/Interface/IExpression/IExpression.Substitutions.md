# IExpression.Substitutions

IExpression.Substitutions
-


# IExpression.Substitutions


## Синтаксис


Substitutions: [IExpressionSubstitutions](../IExpressionSubstitutions/IExpressionSubstitutions.htm);


## Описание


Свойство Substitutions возвращает
 коллекцию подстановок, используемых в выражениях.


## Комментарии


Подстановки применяются для уменьшения текста выражений за счет использования
 [сокращенных
 обозначений](../IExpressionSubstitution/IExpressionSubstitution.Reduction.htm) функций или значений. При вычислениях вместо сокращенного
 обозначения будет подставляться соответствующее [полное
 обозначение](../IExpressionSubstitution/IExpressionSubstitution.Substitution.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button
 и MetaAttributesEdit с наименованиями Button1 и MetaAttributesEdit1 соответственно.


Пример является обработчиком события OnClick для компонента Button1.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Exp: IExpression;

	    Substs: IExpressionSubstitutions;

	    Cat: IExpressionCategory;

	Begin

	    Exp := MetaAttributesEdit1.Expression;

	    Substs := Exp.Substitutions;

	    Cat := Substs.Add("MyCategory");

	    Cat.Add("Sin", "MathFin.Math.Sin");

	    Cat.Add("Cos", "MathFin.Math.Cos");

	    Cat.Add("Tan", "MathFin.Math.Tan");

	    Cat.Add("MyConst", "1354226.31131");

	    Cat.Add("MyFunc", "Module_1.MyFunc");

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку
 в список подстановок выражения, связанного с компонентом "MetaAttributesEdit1",
 будет добавлена новая категория, содержащая пять пользовательских подстановок.
 При составлении выражений будет возможность использовать сокращенные обозначения
 для функций Sin, Cos, Tan пользовательской функции MyFunc, содержащейся
 в модуле "Module_1" и указанной константы. Данные сокращенные
 обозначения будут доступны в IntelliSense компонента.


См. также:


[IExpression](IExpression.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
