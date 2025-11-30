# ITabFootnote.Number

ITabFootnote.Number
-


# ITabFootnote.Number


## Синтаксис


Number: Integer;


## Описание


Свойство Number возвращает порядковый
 номер сноски.


## Комментарии


Нумерация сносок выполняется автоматически при их добавлении в коллекцию.
 Стартовый номер указывается в свойстве [ITabFootnotes.StartingNumber](../ITabFootnotes/ITabFootnotes.StartingNumber.htm).
 Также учитывается признак необходимости создания сносок с уникальными
 номерами - [ITabFootnotes.UniqueNumbers](../ITabFootnotes/ITabFootnotes.UniqueNumbers.htm).


Свойство Number вернет значение
 «-1», если для сноски/коллекции сносок задана пользовательская метка ([ITabFootnote.CustomMark](ITabFootnote.CustomMark.htm)/[ITabFootnotes.CustomMark](../ITabFootnotes/ITabFootnotes.CustomMark.htm)).


## Пример


Пример использования приведен в описании свойства [ITabFootnotes.NumberStyle](../ITabFootnotes/ITabFootnotes.NumberStyle.htm).


См. также:


[ITabFootnote](ITabFootnote.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
