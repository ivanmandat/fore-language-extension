# ISecurityPackageLogonDataEx.ParamDescription

ISecurityPackageLogonDataEx.ParamDescription
-


# ISecurityPackageLogonDataEx.ParamDescription


## Синтаксис


ParamDescription(Index: Integer): String;


## Параметры


Index. Индекс параметра модуля
 безопасности.


## Описание


Свойство ParamDescription возвращает
 описание параметра модуля безопасности.


## Пример


Для выполнения примера создайте форму, разместите на ней компоненты:
 кнопку с идентификатором «Button1» и многострочный текстовый редактор
 с идентификатором «Memo1». Добавьте ссылки на системные сборки «Metabase»,
 «Dal», «Db». Предполагается, что в репозитории есть база данных с идентификатором
 «DATA».


Пример является обработчиком события OnClick для кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        MB: IMetabase;

	        DB: IDatabaseInstance;

	        SC: ISecurityConnection;

	        S: ISecurityPackageLogonDataEx;

	        i: integer;

	    Begin

	        MB := MetabaseClass.Active;

	        DB := MB.ItemById("DATA").Open(Null) As IDatabaseInstance;

	        SC := DB.Connection;

	        S := SC.LogonData As ISecurityPackageLogonDataEx;

	        For i := 0 To s.ParamCountEx-1 Do

	            memo1.Lines.Add(s.ParamDescription(i) + " " + s.IsRequired(i).ToString);

	        End For;

	    End Sub Button1OnClick;


При нажатии на кнопку в текстовый редактор будет выведено описание параметров
 модуля безопасности и возможность использования подключения с привилегией
 для них.


См. также:


[ISecurityPackageLogonDataEx](ISecurityPackageLogonDataEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
