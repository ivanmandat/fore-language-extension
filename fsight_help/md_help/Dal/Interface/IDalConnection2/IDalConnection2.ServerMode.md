# IDalConnection2.ServerMode

IDalConnection2.ServerMode
-


# IDalConnection2.ServerMode


## Синтаксис


ServerMode: [DalServerMode](../../Enums/DalServerMode.htm);


## Описание


Свойство ServerMode возвращает
 тип сервера СУБД, к которому осуществляется подключение.


## Комментарии


Если подключение осуществляется с помощью одного из драйверов OLE DB,
 которые установлены в операционной системе, то свойство [Driver](IDalConnection2.Driver.htm)
 вернет значение «OLEDB». При этом
 свойство ServerMode позволяет
 определить тип семейства серверов СУБД, драйвер которого был использован.


Примечание.
 Свойство не возвращает конкретную модель драйвера.


## Пример


			Sub CheckServer(Connection: IDalConnection2);

Begin

    If Connection.Driver = "OLEDB" Then

        Select Case Connection.ServerMode

            Case DalServerMode.ORCL: //Дальнейшая работа с соединением и формирование запросов с синтаксисом Oracle

            Case DalServerMode.MSSQL: //Дальнейшая работа с соединением и формирование запросов с синтаксисом Microsoft SQL Server

            //...

            //Проверка остальных типов...

            //...

        End Select;

    End If;

End Sub CheckServer;


Указанная функция может использоваться для проверки типа сервера СУБД,
 если подключение осуществляется с использованием какого-либо драйвера
 OLE DB.


См. также:


[IDalConnection2](IDalConnection2.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
