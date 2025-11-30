# OpenWsp: Операция

OpenWsp: Операция
-


**


# OpenWsp


## Синтаксис


OpenWspResult OpenWsp(OdId tOb, OpenWspArg tArg)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося рабочим пространством.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenWsp открывает рабочее
 пространство.


## Комментарии


Операция позволяет получить доступ к структуре рабочего пространства.
 Для выполнения операции укажите в поле tOb
 моникёр объекта, являющегося рабочим пространством, а в поле tArg
 параметры открытия. Моникёр объекта может быть получен при выполнении
 операции [GetObjects](../Repository/GetObjects.htm).


В поле tArg могут быть указаны
 режим открытия рабочего пространства (просмотр или редактирование), значения
 параметров и шаблон для извлечения метаданных. В шаблоне указывается та
 информация, которая должна быть получена при выполнении операции. Результатом
 работы операции будет моникёр открытого экземпляра рабочего пространства,
 а также метаданные, если при выполнении операции в поле tArg.metaGet был задан соответствующий шаблон.


Дальнейшая работа с открытым экземпляром осуществляется с помощью операций
 [GetWspMd](GetWspMd.htm) и [SetWspMd](SetWspMd.htm).


Для закрытия открытого экземпляра рабочего пространства используйте
 операцию [CloseWsp](CloseWsp.htm).


## Пример


Ниже приведён пример открытия на редактирование рабочего пространства.
 В запросе передаётся моникёр объекта, являющегося рабочим пространством
 репозитория. В ответе приходит моникёр открытого экземпляра рабочего пространства.


В примере C# используется функция FindObjectById, код которой приведён
 в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenWsp xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!282380</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <bind>true</bind>  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenWsp>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenWspResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!S!WSPMCLOGNLEBJECGOAEIIMMCOLKFIOGIGNEPLNLFCEAJGEIEIBG</id>  </id>
  </OpenWspResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenWsp" :
  {
   "tOb" :
    {
     "id" : "CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!282380"
    },
   "tArg" :
    {
     "args" :
      {
       "bind" : "true",
       "openForEdit" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenWspResult" :
  {
   "id" :
    {
     "id" : "CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!S!WSPMCLOGNLEBJECGOAEIIMMCOLKFIOGIGNEPLNLFCEAJGEIEIBG"
    }
  }
}


public static OpenWspResult OpenWorkspace(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tOpen = new OpenWsp()
    {
        tArg = new OpenWspArg()
        {
            args = new WspOpenArgs()
            {
                bind = true,
                openForEdit = true
            }
        },
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    // Открытие рабочего пространства
    var tResult = somClient.OpenWsp(tOpen);
    return tResult;
}


См. также:


[Работа с
 рабочим пространством](Wsp_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
