# GetTopobase: Операция

GetTopobase: Операция
-


**


# GetTopobase


## Синтаксис


GetTopobaseResult GetTopobase(TopobaseId tTopobase,
 GetTopobaseArg tArg)


## Параметры


tTopobase. Моникёр
 топоосновы.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetTopobase получает
 метаданные топоосновы репозитория.


## Комментарии


Для выполнения операции укажите в поле tTopobase
 моникёр топоосновы в репозитории, а в поле tArg.pattern
 шаблон, в соответствии с которым будут получены метаданные. Моникёр формируется
 на базе моникёра соединения с репозиторием и ключа топоосновы.


Результатом операции будут полученные метаданные топоосновы.


## Пример


Ниже приведён пример получения метаданных топоосновы, хранящейся в репозитории.
 В запросе передаётся моникёр топоосновы. В ответе возвращаются полученные
 метаданные.


В примере C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetTopobase xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tTopobase xmlns="****">
  <id>GCOCKNOMPMOBGOAEBGLLLOMGEAOLGNPEIJNENDGNBHAJJGPF!M!344691</id>  </tTopobase>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <topobase>Triangulate</topobase>  <availableFormats>true</availableFormats>  </pattern>
  </tArg>
  </GetTopobase>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetTopobaseResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>GCOCKNOMPMOBGOAEBGLLLOMGEAOLGNPEIJNENDGNBHAJJGPF!M!344691</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<topobaseOd ds="****" isShortcut="**0**" isLink="**0**" ver="**3**" hf="**0**">
  <i>OBJ344691</i>  <n>Luxembourg.svg</n>  <k>344691</k>  <c>3330</c>  <p>12417</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </topobaseOd>
[![](../../../minus.gif)](../../../#)<topobase>
[![](../../../minus.gif)](../../../#)<topobase width="**462px**" height="**595px**">
[![](../../../minus.gif)](../../../#)<layer id="**RootLayer**">
[![](../../../minus.gif)](../../../#)<layer id="**Regions**">
[![](../../../minus.gif)](../../../#)<shape id="**LU_0**" fill="**#F8DDBE**" stroke="**#000000**" stroke-width="**1**">
  <points borders="**13**" data="**264.548,0 363.729,33.125 330.733,99.181 363.729,198.491 462.846,396.789 462.846,529.225 396.982,595.28 231.422,595.28 66.057,562.22 66.057,363.858 0,231.422 66.056,66.055 198.363,0**" />
  <triangles data="**0 1 2 0 2 3 3 4 5 3 5 6 3 6 7 3 7 8 3 8 9 3 9 10 3 10 11 3 11 12 0 3 12**" />
  </shape>
  </layer>
  </layer>
[![](../../../minus.gif)](../../../#)<metainfo>
[![](../../../minus.gif)](../../../#)<geo>
  <geoItem longitude="**361**" latitude="**1**" x="**1**" y="**0.3303**" />
  <geoItem longitude="**2**" latitude="**2**" x="**0.2803**" y="**1**" />
  </geo>
[![](../../../minus.gif)](../../../#)<attributes>
[![](../../../minus.gif)](../../../#)<attribute name="**ISO**" type="**string**">
  <data id="**LU**" value="**LU**" />
  </attribute>
[![](../../../minus.gif)](../../../#)<attribute name="**Name**" type="**string**">
  <data id="**LU**" value="**Luxembourg**" />
  <data id="**Regions**" value="**Regions**" />
  <data id="**RootLayer**" value="**RootLayer**" />
  </attribute>
[![](../../../minus.gif)](../../../#)<attribute name="**Description**" type="**string**">
  <data id="**LU**" value="**Luxembourg**" />
  </attribute>
[![](../../../minus.gif)](../../../#)<attribute name="**IdMapping**" type="**int**">
  <data id="**Regions**" value="**2**" />
  </attribute>
  </attributes>
  </metainfo>
  </topobase>
  </topobase>
[![](../../../minus.gif)](../../../#)<availableFormats>
  <Item>Svg</Item>  <Item>Google</Item>  <Item>Triangulate</Item>  <Item>Sphere</Item>  </availableFormats>
  </meta>
  </GetTopobaseResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetTopobase" :
  {
   "tTopobase" :
    {
     "id" : "GCOCKNOMPMOBGOAEBGLLLOMGEAOLGNPEIJNENDGNBHAJJGPF!M!344691"
    },
   "tArg" :
    {
     "pattern" :
      {
       "topobase" : "Triangulate",
       "availableFormats" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetTopobaseResult" :
  {
   "id" :
    {
     "id" : "GCOCKNOMPMOBGOAEBGLLLOMGEAOLGNPEIJNENDGNBHAJJGPF!M!344691"
    },
   "meta" :
    {
     "topobaseOd" :
      {
       "@ds" : "",
       "@isShortcut" : "0",
       "@isLink" : "0",
       "@ver" : "3",
       "@hf" : "0",
       "i" : "OBJ344691",
       "n" : "Luxembourg.svg",
       "k" : "344691",
       "c" : "3330",
       "p" : "12417",
       "h" : "0",
       "hasPrv" : "0",
       "ic" : "0",
       "trackElementDependents" : "0"
      },
     "topobase" :
      {
       "topobase" :
        {
         "@width" : "462px",
         "@height" : "595px",
         "layer" :
          {
           "@id" : "RootLayer",
           "layer" :
            {
             "@id" : "Regions",
             "shape" :
              {
               "@stroke-width" : "1",
               "@fill" : "#F8DDBE",
               "@stroke" : "#000000",
               "@id" : "LU_0",
               "points" :
                {
                 "@borders" : "13",
                 "@data" : "264.548,0 363.729,33.125 330.733,99.181 363.729,198.491 462.846,396.789 462.846,529.225 396.982,595.28 231.422,595.28 66.057,562.22 66.057,363.858 0,231.422 66.056,66.055 198.363,0"
                },
               "triangles" :
                {
                 "@data" : "0 1 2 0 2 3 3 4 5 3 5 6 3 6 7 3 7 8 3 8 9 3 9 10 3 10 11 3 11 12 0 3 12"
                }
              }
            }
          },
         "metainfo" :
          {
           "geo" :
            {
             "geoItem" :
              [
                {
                 "@x" : "1",
                 "@y" : "0.3303",
                 "@longitude" : "361",
                 "@latitude" : "1"
                },
                {
                 "@x" : "0.2803",
                 "@y" : "1",
                 "@longitude" : "2",
                 "@latitude" : "2"
                }
              ]
            },
           "attributes" :
            {
             "attribute" :
              [
                {
                 "@name" : "ISO",
                 "@type" : "string",
                 "data" :
                  {
                   "@id" : "LU",
                   "@value" : "LU"
                  }
                },
                {
                 "@name" : "Name",
                 "@type" : "string",
                 "data" :
                  [
                    {
                     "@id" : "LU",
                     "@value" : "Luxembourg"
                    },
                    {
                     "@id" : "Regions",
                     "@value" : "Regions"
                    },
                    {
                     "@id" : "RootLayer",
                     "@value" : "RootLayer"
                    }
                  ]
                },
                {
                 "@name" : "Description",
                 "@type" : "string",
                 "data" :
                  {
                   "@id" : "LU",
                   "@value" : "Luxembourg"
                  }
                },
                {
                 "@name" : "IdMapping",
                 "@type" : "int",
                 "data" :
                  {
                   "@id" : "Regions",
                   "@value" : "2"
                  }
                }
              ]
            }
          }
        }
      },
     "availableFormats" :
      {
       "Item" :
        [
          "Svg",
          "Google",
          "Triangulate",
          "Sphere"
        ]
      }
    }
  }
}


public static GetTopobaseResult GetTopobase(MbId mb, string topobaseId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetTopobase()
    {
        tArg = new GetTopobaseArg()
        {
            pattern = new TopobaseMdPattern()
            {
                availableFormats = true,
                topobase = TopobaseFormat.Triangulate
            }
        },
        tTopobase = new TopobaseId()
        {
            id = mb.id + '!' + FindObjectById(mb, topobaseId).k
        }
    };
    // Получение метаданных топоосновы
    var tResult = somClient.GetTopobase(tGet);
    return tResult;
}


См. также:


[Топооснова:
 Операции](map_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
