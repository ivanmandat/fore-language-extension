# IMsNonLinearRegressionTransform.Expression

IMsNonLinearRegressionTransform.Expression
-


# IMsNonLinearRegressionTransform.Expression


## Синтаксис


Expression: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Expression возвращает
 объект, содержащий уравнение модели.


## Комментарии


В уравнении обязательно должен присутствовать хотя бы один коэффициент
 и один фактор, иначе нелинейное преобразование данных не может быть произведено.


Например: X1 +X2 / 2 * f1, где «X1» и «X2» - факторы, «f1» - коэффициент.


## Пример


Использование свойства приведено в примере для [IMsNonLinearRegressionTransform.OptimizationMethod](IMsNonLinearRegressionTransform.OptimizationMethod.htm).


См. также:


[IMsNonLinearRegressionTransform](IMsNonLinearRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
