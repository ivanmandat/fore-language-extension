# OpenSeg: Операция

OpenSeg: Операция
-


**


# OpenSeg


## Синтаксис


OpenSegResult OpenSeg(OdId tOb, OpenSegArg tArg)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося сегментом куба.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenSeg открывает сегмент
 куба.


## Комментарии


Для выполнения операции укажите в поле tOb
 моникёр объекта, являющегося сегментом, а в поле tArg
 параметры открытия. Моникёр объекта может быть получен при выполнении
 операции [GetObjects](../Repository/GetObjects.htm). В поле
 tArg могут быть указаны режим
 открытия (просмотр или редактирование) и шаблон для извлечения метаданных.
 В шаблоне указывается та информация, которая должна быть получена при
 открытии. Результатом работы операции будет моникёр открытого экземпляра
 сегмента, а также метаданные, если при выполнении операции было определено
 поле tArg.metaGet.


Дальнейшая работа осуществляется с помощью операции [GetSeg](GetSeg.htm)
 и [SetSeg](SetSeg.htm). Для сохранения изменений используйте
 операцию [SaveObject](../Repository/SaveObject.htm).


Для закрытия открытого экземпляра сегмента используйте операцию [CloseSeg](CloseSeg.htm).


## Пример


Ниже приведён пример открытия сегмента куба на редактирование. В запросе
 передаётся моникёр объекта репозитория, являющегося сегментом. В ответе
 приходит полученный моникёр открытого экземпляра сегмента.


В примере C# используется функция FindObjectById, код которой приведён
 в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenSeg xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!317192</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <bind>true</bind>  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenSeg>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenSegResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNOKHLMBOCLDPFOAECLPBNGOGGLICIMAEJIEMIFKOCDIBJKCM</id>  </id>
  <readOnly xmlns="****">0</readOnly>  </OpenSegResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenSeg" :
  {
   "tOb" :
    {
     "id" : "FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!317192"
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
 "OpenSegResult" :
  {
   "id" :
    {
     "id" : "FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNOKHLMBOCLDPFOAECLPBNGOGGLICIMAEJIEMIFKOCDIBJKCM"
    },
   "readOnly" : "0"
  }
}


public static OpenSegResult OpenSeg(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tOpen = new OpenSeg()
    {
        tArg = new OpenSegArg()
        {
            args = new SegOpenArgs()
            {
                bind = true,
                openForEdit = true
            }
        },
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    // Открытие сегмента куба
    var tResult = somClient.OpenSeg(tOpen);
    return tResult;
}


См. также:


[Работа с
 кубами](Cube_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
