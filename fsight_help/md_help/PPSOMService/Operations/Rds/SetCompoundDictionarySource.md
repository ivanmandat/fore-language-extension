# SetCompoundDictionarySource: Операция

SetCompoundDictionarySource: Операция
-


**


# SetCompoundDictionarySource


## Синтаксис


CompoundDictionarySourceResult SetCompoundDictionarySource(RdsId
 id, SetCompoundDictionarySourceArg tArg)


## Параметры


id. Моникёр
 источника составного справочника НСИ.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetCompoundDictionarySource
 изменяет настройки источника составного справочника НСИ.


## Комментарии


Для выполнения операции укажите в поле tRds
 моникёр открытого экземпляра составного справочника НСИ, в поле tArg.pattern шаблон, в соответствии
 с которым будут производиться изменения, а в поле tArg.meta
 устанавливаемые настройки источника. Моникёр может быть получен при выполнении
 операции [CreateCompoundDictionarySource](CreateCompoundDictionarySource.htm),
 [OpenCompoundDictionarySource](OpenCompoundDictionarySource.htm).


Результатом выполнения операции будут обновлённые метаданные источника,
 если было определено поле tArg.metaGet.


## Пример


Ниже приведён пример изменения справочника, лежащего в основе источника
 составного справочника НСИ. В запросе передаётся моникёр источника и описание
 справочника в репозитории. В ответе возвращаются обновлённые метаданные
 источника.


В примере C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetCompoundDictionarySource xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO!Sources!2</id>  </id>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<meta>
  <k>0</k>[![](../../minus.gif)](../../#)<source isShortcut="**false**" isLink="**false**" hf="**false**">
  <i>OBJ305387</i>  <n>Продукция</n>  <k>305387</k>  <c>3076</c>  <p>5610</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  </source>
  </meta>
[![](../../minus.gif)](../../#)<pattern>
  <all>true</all>  </pattern>
[![](../../minus.gif)](../../#)<metaGet>
  <all>true</all>  </metaGet>
  </tArg>
  </SetCompoundDictionarySource>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetCompoundDictionarySourceResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO!Sources!2</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
  <k>2</k>  <id>COMPOUNDDICTIONARYSOURCE1</id>  <n>Источник1</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<source ds="****" isShortcut="**0**" isLink="**0**" ver="**4**" hf="**0**">
  <i>OBJ305387</i>  <n>Продукция</n>  <k>305387</k>  <c>3076</c>  <p>5610</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </source>
  <mappings />
  </meta>
  </SetCompoundDictionarySourceResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetCompoundDictionarySource" :
  {
   "id" :
    {
     "id" : "LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO!Sources!2"
    },
   "tArg" :
    {
     "meta" :
      {
       "k" : "0",
       "source" :
        {
         "@isShortcut" : "false",
         "@isLink" : "false",
         "@hf" : "false",
         "i" : "OBJ305387",
         "n" : "Продукция",
         "k" : "305387",
         "c" : "3076",
         "p" : "5610",
         "h" : "false",
         "hasPrv" : "false",
         "ic" : "false"
        }
      },
     "pattern" :
      {
       "all" : "true"
      },
     "metaGet" :
      {
       "all" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetCompoundDictionarySourceResult" :
  {
   "id" :
    {
     "id" : "LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO!Sources!2"
    },
   "meta" :
    {
     "k" : "2",
     "id" : "COMPOUNDDICTIONARYSOURCE1",
     "n" : "Источник1",
     "vis" : "1",
     "source" :
      {
       "@ds" : "",
       "@isShortcut" : "0",
       "@isLink" : "0",
       "@ver" : "4",
       "@hf" : "0",
       "i" : "OBJ305387",
       "n" : "Продукция",
       "k" : "305387",
       "c" : "3076",
       "p" : "5610",
       "h" : "0",
       "hasPrv" : "0",
       "ic" : "0",
       "trackElementDependents" : "0"
      },
     "mappings" : ""
    }
  }
}


public static CompoundDictionarySourceResult SetCompoundDictionarySource(MbId mb, string compDictMoniker, string sourceMoniker, string dictId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetCompoundDictionarySource()
    {
        tArg = new SetCompoundDictionarySourceArg()
        {
            meta = new RdsCompoundDictSource()
            {
                source = FindObjectById(mb, dictId)
            },
            pattern = new RdsCompoundDictSourcePattern()
            {
                all = true
            },
            metaGet = new RdsCompoundDictSourcePattern()
            {
                all = true
            }
        },
        id = new RdsId() { id = sourceMoniker }
    };
    // Задание справочника, который будет являться источником для составного справочника НСИ
    var tResult = somClient.SetCompoundDictionarySource(tSet);
    return tResult;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
