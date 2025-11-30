# OpenMbSecSnapshot: Операция

OpenMbSecSnapshot: Операция
-


**


# OpenMbSecSnapshot


## Синтаксис


OpenMbSecSnapshotResult OpenMbSecSnapshot(MbId tMbSec,
 OpenMbSecSnapshotArg tArg)


## Параметры


tMon. Моникёр
 соединения с репозиторием.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenMbSecSnapshot открывает
 объект, предназначенный для работы с резервными копиями политики безопасности
 репозитория.


## Комментарии


Объект, полученный при выполнении операции, используется для:


	- Создания копии политики безопасности и сохранении её в виде
	 бинарного файла на сервере;


	- Восстановления политики безопасности из бинарного файла;


	- Отслеживания процесса создания копии/восстановления из копии
	 политики безопасности.


Для выполнения операции укажите в параметре
 tMbSec моникёр соединения с репозиторием. Моникёр может быть получен
 при выполнении операции [OpenMetabase](OpenMetabase.htm).


Результатом выполнения операции OpenMbSecSnapshot
 будет моникёр объекта для работы с резервными копиями политики безопасности.
 Дальнейшая работа осуществляется с помощью операций [SetMbSecSnapshot](SetMbSecSnapshot.htm)
 и [GetMbSecSnapshot](GetMbSecSnapshot.htm).


Для закрытия объекта и освобождения ресурсов сервера используйте операцию
 [CloseMbSecSnapshot](CloseMbSecSnapshot.htm).


## Пример


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenMbSecSnapshot xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMbSec xmlns="****">
  <id>S1!M</id>  </tMbSec>
  <tArg xmlns="****" />
  </OpenMbSecSnapshot>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenMbSecSnapshotResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!SecSna1</id>  </id>
  </OpenMbSecSnapshotResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{

 "OpenMbSecSnapshot" :

  {

   "tMbSec" :

    {

     "id" : "S1!M"

    },

   "tArg" : ""

  }

}


### JSON-ответ:


{

 "OpenMbSecSnapshotResult" :

  {

   "id" :

    {

     "id" : "S1!M!S!SecSna1"

    }

  }

}


public static OpenMbSecSnapshotResult OpenSnapshot(string mb)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenMbSecSnapshot()
    {
        tArg = new OpenMbSecSnapshotArg(),
        tMbSec = new MbId() { id = mb }
    };
    //Открытие объекта для работы с резервными копиями политики безопасности
    var result = somClient.OpenMbSecSnapshot(tOpen);
    return result;
}


См. также:


[Операции
 для работы с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
