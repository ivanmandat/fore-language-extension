# OpenRds: Операция

OpenRds: Операция
-


**


# OpenRds


## Синтаксис


OpenRdsResult OpenRds(OdId tOb, OpenRdsArg tArg)


## Параметры


tOb. Моникёр объекта репозитория,
 являющегося справочником НСИ.


tArg. Параметры открытия справочника.


## Описание


Операция OpenRds открывает справочник
 НСИ и возвращает контекст для работы с данными и метаданными справочника.


## Комментарии


Для выполнения операции необходимо в параметре tOb
 указать моникёр объекта, являющегося справочником НСИ, а в параметре tArg указать шаблоны для метаданных,
 которые необходимо извлечь при выполнении операции. Также в параметре
 tArg можно указать значения параметров
 для открытия справочника, если он является параметрическим. Если в параметре
 tArg не заданы шаблоны, то результатом
 работы операции будет только моникёр открытого экземпляра справочника.
 Если шаблоны указаны, то извлеченные метаданные можно получить в поле
 meta.


Дальнейшая работа с открытым экземпляром справочником производится с
 помощью операций [GetRds](GetRds.htm),
 [GetRdsElements](GetRdsElements.htm).
 Для закрытия открытого экземпляра справочника используйте операцию [CloseRds](CloseRds.htm).


## Пример


Пример открытия справочника НСИ на редактирование. В запросе передается
 моникёр объекта репозитория, являющегося справочником НСИ. В ответе приходит
 моникёр открытого экземпляра справочника.


В примере C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenRds xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!219797</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <bind>true</bind>  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenRds>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenRdsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!N2</id>  </id>
  </OpenRdsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenRds" :
  {
   "tOb" :
    {
     "id" : "S1!M!219797"
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
 "OpenRdsResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!N2"
    }
  }
}


public static OpenRdsResult OpenRDSDimension(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenRds()
    {
        tArg = new OpenRdsArg()
        {
            args = new RdsOpenArgs()
            {
                bind = true,
                openForEdit = true
            }
        },
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    //Открытие справочника НСИ
    var tResult = somClient.OpenRds(tOpen);
    return tResult;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
