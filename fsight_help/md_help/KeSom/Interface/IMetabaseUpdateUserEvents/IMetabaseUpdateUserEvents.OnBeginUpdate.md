# IMetabaseUpdateUserEvents.OnBeginUpdate

IMetabaseUpdateUserEvents.OnBeginUpdate
-


# IMetabaseUpdateUserEvents.OnBeginUpdate


## Синтаксис


OnBeginUpdate(Update: [IMetabaseUpdate](../IMetabaseUpdate/IMetabaseUpdate.htm));


## Параметры


Update. Обновление, применяемое
 к текущему репозиторию.


## Описание


Метод OnBeginUpdate реализует
 событие, возникающее перед применением обновления.


## Комментарии


Данное событие может использоваться для определения параметров обновления
 и настройки значений флагов, в соответствии с которыми будут выбираться
 обновляемые объекты.


## Пример


Использование свойства приведено в примере для [IMetabaseUpdateUserEvents.OnAskConstraintsHandling](IMetabaseUpdateUserEvents.OnAskConstraintsHandling.htm).


См. также:


[IMetabaseUpdateUserEvents](IMetabaseUpdateUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
