# ExpressionService.GetTerms

ExpressionService.GetTerms
-


# ExpressionService.GetTerms


## Синтаксис


GetTerms: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии. Аргументы: Terms
 - массив добавляемых термов; IsValid - признак проверки правильности термов,
 если значение аргумента равно true, то будет проведена проверка термов;
 ErrMsg - сообщение об ошибке в терме; ErrPos - позиция в терме, где найдена ошибка.


## Описание


Событие GetTerms наступает после
 успешного получения термов для добавления в выражение.


## Пример


Пример использования приведен в описании метода [ExpressionService.setExpression](ExpressionService.setExpression.htm).


См. также:


[ExpressionService](ExpressionService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
