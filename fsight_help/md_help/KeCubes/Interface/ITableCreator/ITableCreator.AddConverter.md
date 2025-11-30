# ITableCreator.AddConverter

ITableCreator.AddConverter
-


# ITableCreator.AddConverter


## Синтаксис


AddConverter(FieldName: String; Converter: [IValueConverter](../IValueConverter/IValueConverter.htm));


## Параметры


FieldName. Идентификатор поля,
 значения которого должны быть преобразованы;


Converter. Используемый преобразователь
 значений.


## Описание


Метод AddConverter выполняет
 преобразование значений указанного поля.


## Комментарии


Преобразователь значений создаётся пользователем в виде пользовательского
 класса, являющегося потомком интерфейса [IValueConverter](../IValueConverter/IValueConverter.htm).
 Пример реализации преобразователя приведен в описании свойства [IValueConverter.Convert](../IValueConverter/IValueConverter.Convert.htm).


## Пример


Использование свойства приведено в примере для [ITableCreator.Execute](ITableCreator.Execute.htm).


См. также:


[ITableCreator](ITableCreator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
