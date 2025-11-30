# CopyRdsElements: Операция

CopyRdsElements: Операция
-


**


# CopyRdsElements


## Синтаксис


CopyRdsElementsResult CopyRdsElements(RdsId tRds,
 CopyRdsElementsArg tArg)


## Параметры


tRds. Моникёр
 открытого экземпляра составного справочника НСИ.


tArg. Параметры выполнения
 операции.


## Описание


Операция CopyRdsElements копирует
 элементы из источника в составной справочник НСИ.


## Комментарии


Для выполнения операции укажите в поле tRds
 моникёр открытого экземпляра составного справочника НСИ, в поле tArg.tRdsSource моникёр открытого
 экземпляра источника, а в поле tArg.keys
 ключи копируемых элементов. Моникёры могут быть получены при выполнении
 операции [OpenRds](OpenRds.htm). Справочники должны быть открыты
 в режиме для работы с данными (openForEdit = false). Если указать поле
 tArg.moveTo, то элементы будут
 копироваться в качестве дочерних для указанного элемента.


Результатом выполнения операции будут новые ключи скопированных элементов.


## Пример


Ниже приведён пример копирования элементов из источника в составной
 справочник НСИ. В запросе передаются моникёры составного справочника НСИ,
 его источника и ключи копируемых элементов. Также будет указан ключ элемента,
 для которого копируемые элементы станут дочерними. В ответе возвращаются
 новые ключи скопированных элементов.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CopyRdsElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tRds xmlns="****">
  <id>LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NPIFBCHBJELGFGOAECMLPAPIKJFNEPKKEGJGBPHNCKPGLFGNM</id>  </tRds>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<tRdsSource>
  <id>LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NPMCHHHBJELGFGOAEFPBDBBDHMOMJJLAEBKGELOEPLFAHKBDO</id>  </tRdsSource>
[![](../../minus.gif)](../../#)<keys>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <key>1</key>  </it>
[![](../../minus.gif)](../../#)<it>
  <key>2</key>  </it>
  </its>
  </keys>
[![](../../minus.gif)](../../#)<moveTo>
[![](../../minus.gif)](../../#)<element>
  <key>2</key>  </element>
  <relation>LastChild</relation>  </moveTo>
  </tArg>
  </CopyRdsElements>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<CopyRdsElementsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NPIFBCHBJELGFGOAECMLPAPIKJFNEPKKEGJGBPHNCKPGLFGNM</id>  </id>
[![](../../minus.gif)](../../#)<keys xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <key>6</key>  </it>
[![](../../minus.gif)](../../#)<it>
  <key>7</key>  </it>
  </its>
  </keys>
  </CopyRdsElementsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CopyRdsElements" :
  {
   "tRds" :
    {
     "id" : "LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NPIFBCHBJELGFGOAECMLPAPIKJFNEPKKEGJGBPHNCKPGLFGNM"
    },
   "tArg" :
    {
     "tRdsSource" :
      {
       "id" : "LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NPMCHHHBJELGFGOAEFPBDBBDHMOMJJLAEBKGELOEPLFAHKBDO"
      },
     "keys" :
      {
       "its" :
        {
         "it" :
          [
            {
             "key" : "1"
            },
            {
             "key" : "2"
            }
          ]
        }
      },
     "moveTo" :
      {
       "element" :
        {
         "key" : "2"
        },
       "relation" : "LastChild"
      }
    }
  }
}

### JSON-ответ:


{
 "CopyRdsElementsResult" :
  {
   "id" :
    {
     "id" : "LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NPIFBCHBJELGFGOAECMLPAPIKJFNEPKKEGJGBPHNCKPGLFGNM"
    },
   "keys" :
    {
     "its" :
      {
       "it" :
        [
          {
           "key" : "6"
          },
          {
           "key" : "7"
          }
        ]
      }
    }
  }
}


public static CopyRdsElementsResult CopyRdsElements(string compDictMoniker, string sourceMoniker, RdsKeys copyElementsKeys, string copyToElement)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tCopy = new CopyRdsElements()
    {
        tArg = new CopyRdsElementsArg()
        {
            keys = copyElementsKeys,
            moveTo = (copyToElement != null ? new ElMoveInfo() { element = new ElKey() { key = copyToElement }, relation = TreeRelation.LastChild } : null),
            tRdsSource = new RdsId() { id = sourceMoniker }
        },
        tRds = new RdsId() { id = compDictMoniker }
    };
    // Копирование элементов из источника в составной справочник НСИ
    var tResult = somClient.CopyRdsElements(tCopy);
    return tResult;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
