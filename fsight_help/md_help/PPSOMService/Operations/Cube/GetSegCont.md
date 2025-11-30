# GetSegCont: Операция

GetSegCont: Операция
-


**


# GetSegCont


## Синтаксис


GetSegContResult GetSegCont(SegContId tSegCont,
 GetSegContArg tArg)


## Параметры


tSegCont. Моникёр
 экземпляра контейнера сегментов.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetSegCont получает
 метаданные контейнера сегментов.


## Комментарии


Для выполнения операции укажите в поле tSegCont
 моникёр экземпляра контейнера сегментов, а в поле tArg.pattern
 шаблон, в соответствии с которым будут извлекаться метаданные. Моникёр
 может быть получен при выполнении операции [OpenSegCont](OpenSegCont.htm).


Результатом работы операции будут полученные метаданные.


## Пример


Ниже приведён пример получения метаданных контейнера сегментов. В запросе
 передаётся моникёр открытого экземпляра контейнера сегментов. В ответе
 возвращаются полученные метаданные.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetSegCont xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tSegCont xmlns="****">
  <id>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNIKPLJBOCLDPFOAEJGOHDKFEFEEPOCLEFIAOPAACCEOBKNOG</id>  </tSegCont>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <database>true</database>  <segments>Get</segments>  </pattern>
  </tArg>
  </GetSegCont>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetSegContResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNIKPLJBOCLDPFOAEJGOHDKFEFEEPOCLEFIAOPAACCEOBKNOG</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**27**" hf="**0**">
  <i>SEG_CONTAINER</i>  <n>Контейнер сегментов куба</n>  <k>317162</k>  <c>1296</c>  <p>317056</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../minus.gif)](../../#)<data>
[![](../../minus.gif)](../../#)<database>
  <id>DB</id>  <k>56</k>  <n>БД</n>  <classId>513</classId>  </database>
[![](../../minus.gif)](../../#)<segments>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <id>OBJ317192</id>  <k>317192</k>  <n>Сегмент куба</n>  <active>0</active>  </it>
[![](../../minus.gif)](../../#)<it>
  <id>OBJ317197</id>  <k>317197</k>  <n>Сегмент куба</n>  <active>1</active>  </it>
  </its>
  </segments>
  </data>
  </meta>
  </GetSegContResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetSegCont" :
  {
   "tSegCont" :
    {
     "id" : "FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNIKPLJBOCLDPFOAEJGOHDKFEFEEPOCLEFIAOPAACCEOBKNOG"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "database" : "true",
       "segments" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "GetSegContResult" :
  {
   "id" :
    {
     "id" : "FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNIKPLJBOCLDPFOAEJGOHDKFEFEEPOCLEFIAOPAACCEOBKNOG"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "27",
         "@hf" : "0",
         "i" : "SEG_CONTAINER",
         "n" : "Контейнер сегментов куба",
         "k" : "317162",
         "c" : "1296",
         "p" : "317056",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "data" :
      {
       "database" :
        {
         "id" : "DB",
         "k" : "56",
         "n" : "БД",
         "classId" : "513"
        },
       "segments" :
        {
         "its" :
          {
           "it" :
            [
              {
               "id" : "OBJ317192",
               "k" : "317192",
               "n" : "Сегмент куба",
               "active" : "0"
              },
              {
               "id" : "OBJ317197",
               "k" : "317197",
               "n" : "Сегмент куба",
               "active" : "1"
              }
            ]
          }
        }
      }
    }
  }
}


public static GetSegContResult GetSegCont(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetSegCont()
    {
        tArg = new GetSegContArg()
        {
            pattern = new SegContMdPattern()
            {
                database = true,
                segments = ListOperation.Get
            }
        },
        tSegCont = new SegContId() { id = moniker }
    };
    // Получение информации о контейнере сегментов
    var result = somClient.GetSegCont(tGet);
    return result;
}


См. также:


[Работа с
 кубами](Cube_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
