# OpenSegCont: Операция

OpenSegCont: Операция
-


**


# OpenSegCont


## Синтаксис


OpenSegContResult OpenSegCont(OdId tOb, OpenSegContArg
 tArg)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося контейнером сегментов куба.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenSegCont открывает
 контейнер сегментов куба.


## Комментарии


Для выполнения операции укажите в поле tOb
 моникёр объекта, являющегося контейнером сегментов, а в поле tArg
 параметры открытия. Моникёр объекта может быть получен при выполнении
 операции [GetObjects](../Repository/GetObjects.htm). В поле
 tArg могут быть указаны режим
 открытия (просмотр или редактирование) и шаблон для извлечения метаданных.
 В шаблоне указывается та информация, которая должна быть получена при
 открытии.


Результатом работы операции будет моникёр открытого экземпляра контейнера
 сегментов, а также метаданные, если при выполнении операции было определено
 поле tArg.metaGet.


Дальнейшая работа осуществляется с помощью операции [GetSegCont](GetSegCont.htm)
 и [SetSegCont](SetSegCont.htm). Для сохранения изменений используйте
 операцию [SaveObject](../Repository/SaveObject.htm).


Для закрытия открытого экземпляра объекта используйте операцию [CloseSegCont](CloseSegCont.htm).


## Пример


Ниже приведён пример открытия контейнера сегментов на редактирование.
 В запросе передаётся моникёр объекта репозитория, являющегося контейнером
 сегментов. В ответе приходит полученный моникёр открытого экземпляра контейнера
 сегментов.


В примере C# используется функция FindObjectById, код которой приведён
 в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenSegCont xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!317162</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <bind>true</bind>  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenSegCont>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenSegContResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNIKPLJBOCLDPFOAEJGOHDKFEFEEPOCLEFIAOPAACCEOBKNOG</id>  </id>
  <readOnly xmlns="****">0</readOnly>  </OpenSegContResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenSegCont" :
  {
   "tOb" :
    {
     "id" : "FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!317162"
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
 "OpenSegContResult" :
  {
   "id" :
    {
     "id" : "FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNIKPLJBOCLDPFOAEJGOHDKFEFEEPOCLEFIAOPAACCEOBKNOG"
    },
   "readOnly" : "0"
  }
}


public static OpenSegContResult OpenSegCont(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tOpen = new OpenSegCont()
    {
        tArg = new OpenSegContArg()
        {
            args = new SegContOpenArgs()
            {
                openForEdit = true
            }
        },
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    // Открытие контейнера сегментов
    var tResult = somClient.OpenSegCont(tOpen);
    return tResult;
}


См. также:


[Работа с
 кубами](Cube_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
