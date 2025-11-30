# IMetabase.IsDisconnected

IMetabase.IsDisconnected
-


# IMetabase.IsDisconnected


## Синтаксис


IsDisconnected: Boolean;


## Описание


Метод IsDisconnected возвращает
 признак отсутствия соединения с сервером БД.


## Комментарии


Метод возвращает значение True,
 если отсутствует соединение с сервером БД и False,
 если соединение присутствует. В случае отсутствия соединения можно попытаться
 восстановить его. Для этого используется метод [RefreshO](IMetabase.RefreshO.htm)
 с соответствующим значением параметра MetabaseRefreshOptions.Reconnect.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием Button1.


Добавьте ссылку на системную сборку Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	Begin

	    MB := MetabaseClass.Active;

	    Try

	        MB.Refresh;

	    Except

	        If MB.IsDisconnected Then

	            MB.RefreshO(

	                MetabaseRefreshOptions.Reconnect Or

	                MetabaseRefreshOptions.NoObjects Or

	                MetabaseRefreshOptions.NoRefreshEvent);

	        End If;

	    End Try;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет осуществлено обновление
 дерева объектов репозитория. Если во время обновления возникла ошибка,
 связанная с потерей соединения с сервером БД, то соединение будет восстановлено.


См. также:


[IMetabase](IMetabase.htm) | [IMetabase.RefreshO](IMetabase.RefreshO.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
