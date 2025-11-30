# GetSeg: Операция

GetSeg: Операция
-


**


# GetSeg


## Синтаксис


GetSegResult GetSeg(SegId tSeg, GetSegArg tArg)


## Параметры


tSeg. Моникёр
 экземпляра сегмента куба.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetSeg получает метаданные
 сегмента куба.


## Комментарии


Для выполнения операции укажите в поле tSeg
 моникёр экземпляра сегмента, а в поле tArg.pattern
 шаблон, в соответствии с которым будут извлекаться метаданные. Моникёр
 может быть получен при выполнении операции [OpenSeg](OpenSeg.htm).


Результатом работы операции будут полученные метаданные.


## Пример


Ниже приведён пример получения метаданных сегмента куба. В запросе передаётся
 моникёр открытого экземпляра сегмента. В ответе возвращаются полученные
 метаданные.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetSeg xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tSeg xmlns="****">
  <id>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNOKHLMBOCLDPFOAECLPBNGOGGLICIMAEJIEMIFKOCDIBJKCM</id>  </tSeg>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <selections>Get</selections>  <active>true</active>  </pattern>
  </tArg>
  </GetSeg>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetSegResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNOKHLMBOCLDPFOAECLPBNGOGGLICIMAEJIEMIFKOCDIBJKCM</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**4**" hf="**0**">
  <i>OBJ317192</i>  <n>Сегмент куба</n>  <k>317192</k>  <c>1295</c>  <p>317162</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../minus.gif)](../../#)<data>
  <active>0</active>[![](../../minus.gif)](../../#)<selections>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <id>FACTS</id>  <k>317074</k>  <n>Факты</n>  <classId>1028</classId>  <selection>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CBELIBOBOCLDPFOAEEHNKPOJODKGKIEEEOJCFOCLHCMEIJKDL</selection>  <included>1</included>  </it>
[![](../../minus.gif)](../../#)<it>
  <id>OBJ317067</id>  <k>317067</k>  <n>Справочник 1</n>  <classId>3076</classId>  <selection>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CBELIBOBOCLDPFOAENOJILFIHBELKNFAEALMNNFAJOOJOFNEJ</selection>  <included>1</included>  </it>
[![](../../minus.gif)](../../#)<it>
  <id>OBJ317069</id>  <k>317069</k>  <n>Справочник 2</n>  <classId>3076</classId>  <selection>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CBELIBOBOCLDPFOAEOGICMPLDDFJOANAEGIJNBDLMDNMMCAML</selection>  <included>1</included>  </it>
[![](../../minus.gif)](../../#)<it>
  <id>OBJ317071</id>  <k>317071</k>  <n>Календарь</n>  <classId>1026</classId>  <selection>FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CBELIBOBOCLDPFOAEICINIJOAOBONHJPELKFACMADOKJEDOHK</selection>  <included>1</included>  </it>
  </its>
  </selections>
  </data>
  </meta>
  </GetSegResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetSeg" :
  {
   "tSeg" :
    {
     "id" : "FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNOKHLMBOCLDPFOAECLPBNGOGGLICIMAEJIEMIFKOCDIBJKCM"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "selections" : "Get",
       "active" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetSegResult" :
  {
   "id" :
    {
     "id" : "FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CNOKHLMBOCLDPFOAECLPBNGOGGLICIMAEJIEMIFKOCDIBJKCM"
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
         "@ver" : "4",
         "@hf" : "0",
         "i" : "OBJ317192",
         "n" : "Сегмент куба",
         "k" : "317192",
         "c" : "1295",
         "p" : "317162",
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
       "active" : "0",
       "selections" :
        {
         "its" :
          {
           "it" :
            [
              {
               "id" : "FACTS",
               "k" : "317074",
               "n" : "Факты",
               "classId" : "1028",
               "selection" : "FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CBELIBOBOCLDPFOAEEHNKPOJODKGKIEEEOJCFOCLHCMEIJKDL",
               "included" : "1"
              },
              {
               "id" : "OBJ317067",
               "k" : "317067",
               "n" : "Справочник 1",
               "classId" : "3076",
               "selection" : "FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CBELIBOBOCLDPFOAENOJILFIHBELKNFAEALMNNFAJOOJOFNEJ",
               "included" : "1"
              },
              {
               "id" : "OBJ317069",
               "k" : "317069",
               "n" : "Справочник 2",
               "classId" : "3076",
               "selection" : "FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CBELIBOBOCLDPFOAEOGICMPLDDFJOANAEGIJNBDLMDNMMCAML",
               "included" : "1"
              },
              {
               "id" : "OBJ317071",
               "k" : "317071",
               "n" : "Календарь",
               "classId" : "1026",
               "selection" : "FLEDMHBOCLDPFOAEDMFBLHBLOEJDMKEEKKHHKBBDHHIFPONM!M!S!CBELIBOBOCLDPFOAEICINIJOAOBONHJPELKFACMADOKJEDOHK",
               "included" : "1"
              }
            ]
          }
        }
      }
    }
  }
}


public static GetSegResult GetSeg(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetSeg()
    {
        tArg = new GetSegArg()
        {
            pattern = new SegMdPattern()
            {
                active = true,
                selections = ListOperation.Get
            }
        },
        tSeg = new SegId() { id = moniker }
    };
    // Получение информации о сегменте куба
    var result = somClient.GetSeg(tGet);
    return result;
}


См. также:


[Работа с
 кубами](Cube_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
