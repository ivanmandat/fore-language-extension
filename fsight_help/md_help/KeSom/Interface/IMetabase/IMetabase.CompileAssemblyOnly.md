# IMetabase.CompileAssemblyOnly

IMetabase.CompileAssemblyOnly
-


# IMetabase.CompileAssemblyOnly


## Синтаксис


		CompileAssemblyOnly: Boolean;


## Описание


Свойство CompileAssemblyOnly
 определяет признак возможности компиляции форм/модулей вне сборок.


## Комментарии


Если свойству установлено значение True,
 то компиляция форм/модулей вне сборок будет запрещена.


Данное свойство актуально только для текущего подключения к репозиторию.
 При отключении значение будет сброшено в соответствии с настройками, установленными
 на вкладке «[Обработка
 событий](UiDevEnv.chm::/04_NavigatorSetting/EventHandler.htm)».


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием «Button1».


Добавьте ссылки на системные сборки: Forms, Metabase.


					Sub Button1OnClick(Sender: Object; Args: IEventArgs);

		Var

		    MB: IMetabase;

		Begin

		    MB := MetabaseClass.Active;

		    MB.CompileAssemblyOnly := True;

		End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет запрещена компиляция
 форм/модулей вне сборок при работе в текущем репозитории.


См. также:


[IMetabase](IMetabase.htm) | [IMetabaseDefinition.CompileAssemblyOnly](../IMetabaseDefinition/IMetabaseDefinition.CompileAssemblyOnly.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
