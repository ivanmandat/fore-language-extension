# CloseMbSecSnapshot: Операция

CloseMbSecSnapshot: Операция
-


**


# CloseMbSecSnapshot


## Синтаксис


bool CloseMbSecSnapshot(MbSecSnapshotId tMbSecSnapshot)


## Параметры


tMbSecSnapshot. Моникёр
 объекта, предназначенного для работы с резервными копиями политики безопасности.


## Описание


Операция CloseMbSecSnapshot
 закрывает объект, предназначенный для работы с резервными копиями политики
 безопасности.


## Комментарии


Для выполнения операции укажите в поле tMbSecSnapshot
 моникёр открытого объекта. Моникёр может быть получен при выполнении операции
 [OpenMbSecSnapshot](OpenMbSecSnapshot.htm).
 Результатом операции будет логическое значение true,
 если закрытие объекта и освобождение ресурсов сервера завершилось успешно.


## Пример


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseMbSecSnapshot xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMbSecSnapshot xmlns="****">
  <id>S1!M!S!SecSna1</id>  </tMbSecSnapshot>
  </CloseMbSecSnapshot>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseMbSecSnapshotResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseMbSecSnapshotResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{

 "CloseMbSecSnapshot" :

  {

   "tMbSecSnapshot" :

    {

     "id" : "S1!M!S!SecSna1"

    }

  }

}


### JSON-ответ:


{

 "CloseMbSecSnapshotResult" : "1"

}


public static bool CloseSnapshot(string secSnapshot)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операций
    var tClose = new CloseMbSecSnapshot()
    {
        tMbSecSnapshot = new MbSecSnapshotId() { id = secSnapshot }
    };
    //Закрытие объекта для работы с политикой безопасности
    var b = somClient.CloseMbSecSnapshot(tClose);
    return b;
}


См. также:


[Операции
 для работы с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
