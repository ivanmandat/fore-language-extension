# IUpdateCallback.OnCallback

IUpdateCallback.OnCallback
-


# IUpdateCallback.OnCallback


## Синтаксис


OnCallback(Reason: [MetabaseUpdateCallbackReason](../../Enums/MetabaseUpdateCallbackReason.htm);
 Update: [IMetabaseUpdate](../IMetabaseUpdate/IMetabaseUpdate.htm)):
 Boolean;


## Параметры


Reason. Действие, в результате
 которого наступает событие, связанное с обновлением.


Update. Обновление, для которого
 было сгенерировано событие.


## Описание


Метод OnCallback реализует событие,
 связанное с обновлением в репозитории.


## Комментарии


Если метод возвращает значение True,
 то действие Reason будет запрещено.
 При значение False действие Reason разрешено.


## Пример


Добавьте ссылку на системную сборку Metabase.


	Class CUpdateCallback: UpdateCallback

	    Function OnCallback(Reason: MetabaseUpdateCallbackReason; Update: IMetabaseUpdate): Boolean;

	    Begin

	        If (Reason = MetabaseUpdateCallbackReason.ApplyCoreStart) And Not IsNull(Update.RootFolder.FindObject(12345)) Then

	            Return True; // Запрет действия

	        Else

	            Return False; // Разрешение действия

	        End If;

	    End Function OnCallback;

	End Class CUpdateCallback;


Указанный пример является глобальный обработчиком событий работы с обновлениями.
 Во время начала применения обновления, если в его дереве объектов имеется
 объект с ключом 12345, то установка всего обновления будет отменена.


См. также:


[IUpdateCallback](IUpdateCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
