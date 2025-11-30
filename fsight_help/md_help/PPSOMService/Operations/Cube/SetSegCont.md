# SetSegCont: Операция

SetSegCont: Операция
-


**


# SetSegCont


## Синтаксис


SetSegContResult SetSegCont(SegContId tSegCont,
 SetSegContArg tArg)


## Параметры


tSegCont. Моникёр
 экземпляра контейнера сегментов.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetSegCont изменяет
 метаданные контейнера сегментов.


## Комментарии


Для выполнения операции укажите в поле tAlg
 моникёр экземпляра контейнера сегментов, в поле tArg.pattern
 шаблон, в соответствии с которым будут изменяться метаданные, а в поле
 tArg.meta устанавливаемые метаданные.
 Также можно определить шаблон tArg.metaGet
 для получения метаданных после их изменения. Моникёр может быть получен
 при выполнении операции [OpenSegCont](OpenSegCont.htm).


Для сохранения изменений используйте операцию [SaveObject](../Repository/SaveObject.htm).


Результатом работы операции будут обновлённые метаданные, если было
 определено поле tArg.metaGet.


## Пример


Ниже приведён пример изменения базы данных для контейнера сегментов.
 В запросе передаётся моникёр открытого экземпляра контейнера сегментов
 и ключ базы данных. В ответе возвращается обновлённая информация о базе
 данных, которую использует контейнер сегментов.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetSegCont xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tSegCont xmlns="****">
  <id>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNIKPLJBOCLDPFOAEJGOHDKFEFEEPOCLEFIAOPAACCEOBKNOG</id>  </tSegCont>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <database>true</database>  </pattern>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<data>
[![](../../minus.gif)](../../#)<database>
  <k>144693</k>  </database>
  </data>
  </meta>
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <database>true</database>  </metaGet>
  </tArg>
  </SetSegCont>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetSegContResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNIKPLJBOCLDPFOAEJGOHDKFEFEEPOCLEFIAOPAACCEOBKNOG</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**27**" hf="**0**">
  <i>SEG_CONTAINER</i>  <n>Контейнер сегментов куба</n>  <k>317162</k>  <c>1296</c>  <p>317056</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>[![](../../minus.gif)](../../#)<data>
[![](../../minus.gif)](../../#)<database>
  <id>BD_1</id>  <k>144693</k>  <n>База данных</n>  <classId>513</classId>  </database>
  </data>
  </meta>
  </SetSegContResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetSegCont" :
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
       "database" : "true"
      },
     "meta" :
      {
       "data" :
        {
         "database" :
          {
           "k" : "144693"
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "database" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetSegContResult" :
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
     "dirty" : "1",
     "data" :
      {
       "database" :
        {
         "id" : "BD_1",
         "k" : "144693",
         "n" : "База данных",
         "classId" : "513"
        }
      }
    }
  }
}


public static SetSegContResult SetSegCont(string moniker, uint bdKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetSegCont()
    {
        tArg = new SetSegContArg()
        {
            pattern = new SegContMdPattern()
            {
                database = true,
            },
            meta = new SegContMd()
            {
                data = new SegContData()
                {
                    database = new SimpleMbObject() { k = bdKey }
                }
            },
            metaGet = new SegContMdPattern()
            {
                database = true
            }
        },
        tSegCont = new SegContId() { id = moniker }
    };
    // Изменение настроек контейнере сегментов
    var result = somClient.SetSegCont(tSet);
    return result;
}


См. также:


[Работа с
 кубами](Cube_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
