# ISecurityPackageLogonDataEx.ParamIndex

ISecurityPackageLogonDataEx.ParamIndex
-


# ISecurityPackageLogonDataEx.ParamIndex


## Синтаксис


ParamIndex(ParamName: String): Integer;


## Параметры


ParamName. Наименование параметра
 модуля безопасности.


## Описание


Свойство ParamIndex возвращает
 индекс параметра модуля безопасности.


## Комментарии


Наименования параметров для разных СУБД отличаются. При написании наименований
 соблюдайте верхний регистр.


		 Наименования параметра
		 Краткое описание


		 Oracle
		 MSSQL
		 DB


		 SERVER
		 Псевдоним сервера.
		 ![](../../check16.png)
		 ![](../../check16.png)
		 ![](../../check16.png)


		 SCHEME
		 Идентификатор базы данных (репозиторий).
		 ![](../../check16.png)
		 ![](../../cancel16.png)
		 ![](../../cancel16.png)


		 OSAUTHENTPREFIX
		 Префикс перед именами пользователей.
		 ![](../../check16.png)
		 ![](../../cancel16.png)
		 ![](../../cancel16.png)


		 DATABASE_ONLY
		 Идентификатор базы данных.
		 ![](../../check16.png)
		 ![](../../check16.png)
		 ![](../../check16.png)


		 SCHEMA_ONLY
		 Идентификатор пользовательской схемы в базе данных.
		 ![](../../check16.png)
		 ![](../../check16.png)
		 ![](../../check16.png)


		 DATABASE
		 Идентификатор базы данных.
		 ![](../../cancel16.png)
		 ![](../../check16.png)
		 ![](../../check16.png)


		 FILEGROUP
		 Пользовательская файловая группа базы данных.
		 ![](../../cancel16.png)
		 ![](../../check16.png)
		 ![](../../cancel16.png)


		 PROVIDER
		 Идентификатор драйвера.
		 ![](../../cancel16.png)
		 ![](../../cancel16.png)
		 ![](../../check16.png)


Условные обозначения:


![](../../check16.png) - наименование параметра
 доступно;


![](../../cancel16.png) - наименование
 параметра недоступно.


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

        Index: integer;

    Begin

        MB := MetabaseClass.Active;

        DB := MB.ItemById("DATA").Open(Null) As IDatabaseInstance;

        SC := DB.Connection;

        S := SC.LogonData As ISecurityPackageLogonDataEx;

        Index := S.ParamIndex("SCHEME");

        memo1.Lines.Add(S.ParamDescription(Index) + " " + S.IsLocal(Index).ToString);

    End Sub Button1OnClick;


При нажатии на кнопку в текстовый редактор будет выведено описание параметра
 модуля безопасности и возможность использования его в качестве глобальной
 переменной.


См. также:


[ISecurityPackageLogonDataEx](ISecurityPackageLogonDataEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
