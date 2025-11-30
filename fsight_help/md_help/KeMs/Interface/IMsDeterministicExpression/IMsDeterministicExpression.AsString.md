# IMsDeterministicExpression.AsString

IMsDeterministicExpression.AsString
-


# IMsDeterministicExpression.AsString


## Синтаксис


AsString(InnerText: Boolean): String;


## Параметры


InnerText. Признак необходимости
 получить внутреннее представление формулы.


## Описание


Свойство AsString возвращает
 текст формулы.


## Комментарии


Если в параметре InnerText
 передаётся значение True, то свойство
 вернёт текст формулы, представленный через внутренние представления термов,
 которые используются при расчёте формулы. При значении параметра False свойство возвращает текст
 формулы, в котором наименования термов формируются с использованием наименований
 элементов измерений.


См. также:


[IMsDeterministicExpression](IMsDeterministicExpression.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
