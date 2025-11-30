# CloseQueryEventArgs.CreateArgs

CloseQueryEventArgs.CreateArgs
-


# CloseQueryEventArgs.CreateArgs


## Синтаксис


CreateArgs(Allowed: Boolean; CloseReason: [FormCloseReason](../../Enums/FormCloseReason.htm));


## Параметры


Allowed. Параметр, определяющий признак закрытия формы. Если передается значение True, то форма будет закрыта.


CloseReason. Параметр, определяющий причину закрытия формы.


## Описание


Конструктор CreateArgs создает аргумент события [OnCloseQuery](../Form/Form.OnCloseQuery.htm), с указанием признака закрытия и причины закрытия формы.


См. также:


[CloseQueryEventArgs](CloseQueryEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
