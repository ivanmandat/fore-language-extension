# IDalConnectionDescriptorParams.Find

IDalConnectionDescriptorParams.Find
-


# IDalConnectionDescriptorParams.Find


## Синтаксис


Find(Param: String): [IDalConnectionDescriptorParam](../IDalConnectionDescriptorParam/IDalConnectionDescriptorParam.htm);


## Параметры


Param. Наименование параметра.


## Описание


Метод Find осуществляет поиск
 параметра по наименованию.


Примечание.
 Метод не предназначен для использования в прикладном коде. Оставлен для
 совместимости с предыдущими версиями.


## Комментарии


Список параметров формируется ядром «Форсайт. Аналитическая платформа»
 для каждого драйвера индивидуально. Наименования параметров, указываемых
 в параметре Name, можно получить
 в свойстве [IDalConnectionDescriptorParam.Name](../IDalConnectionDescriptorParam/IDalConnectionDescriptorParam.Name.htm)
 при обходе текущей коллекции параметров.


Также существует специфический параметр CursorMaxBufferSize,
 влияющий на дальнейшую работу. Параметр определяет размер буфера, выделяемого
 для работы с курсорами. Размер указывается в байтах.


Примечание.
 Параметр CursorMaxBufferSize влияет
 на работу только с серверами на базе СУБД Oracle.


## Пример


Добавьте ссылки на системные сборки: Dal, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Driv: IDalDriver;

	    ConnectDesc: IDalConnectionDescriptor;

	    Params: IDalConnectionDescriptorParams;

	    Connect: IDalConnection;

	    Comand: IDalCommand;

	Begin

	    MB := MetabaseClass.Active;

	    Driv := New DalOrcl8Driver.Create As IDalDriver;

	    ConnectDesc := Driv.CreateDescriptor;

	    Params := ConnectDesc.Params;

	    Params.Find("User Name").Value := "User";

	    Params.Find("Password").Value := "Password";

	    Params.Find("Host BSTR").Value := "OrclServer";

	    Params.Find("Schema").Value := "Warehouse";

	    Params.Find("CursorMaxBufferSize").Value := "1000000";

	    Connect := ConnectDesc.CreateConnection;

	    Comand := Connect.CreateCommand;

	    Comand.SQL := "Select * From Table_1";

	    Comand.Execute;

	    Comand.Close;

	End Sub UserProc;


В результате выполнения примера будет создано новое соединения с сервером
 БД, после указания четырех обязательных параметров, будет осуществлено
 подключение к схеме «Warehouse», расположенной на сервере «Test», после
 чего произойдёт выполнение SQL-запроса, который выбирает все записи из
 таблицы "Table_1". Для указания значения параметров подключения
 осуществляется поиск соответствующих параметров по наименованию.


См. также:


[IDalConnectionDescriptorParams](IDalConnectionDescriptorParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
