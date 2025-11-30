# OpenHie: Операция

OpenHie: Операция
-


**


# OpenHie


## Синтаксис


OpenHieResult OpenHie(RubId tRub, OpenHieArg tArg)


## Параметры


tRub. Моникёр объекта репозитория,
 являющегося базой данных временных рядов.


tArg. Параметры открытия иерархии
 показателей.


## Описание


Операция OpenHie осуществляет
 построение иерархии показателей базы данных временных рядов.


## Комментарии


Для выполнения операции необходимо задать базу данных временных рядов,
 иерархия показателей которой будет отстроена. Для указания доступны два
 варианта: Если имеется открытый экземпляр БДВР, то указать его моникёр
 в параметре tRub (моникёр может
 быть получен при выполнении операции [OpenRub](OpenRub.htm));
 Если открытого экземпляра БДВР нет, то указать моникёр соответствующего
 объекта репозитория в поле tArg.args.rubObj
 (моникёр объекта репозитория может быть получен при выполнении операции
 [GetObjects](../Repository/GetObjects.htm)).


Также в поле tArg.metaGet может
 быть задан шаблон, в соответствии с которым будут извлекаться метаданные
 показателей, а в поле tArg.loadXml
 могут быть определены параметры загрузки показателей из XML-структуры.


Результатом работы операции будет моникёр иерархии показателей, а также
 метаданные, если при выполнении операции был задан шаблон tArg.metaGet.
 Дальнейшая работа осуществляется с помощью операций [GetHieMd](GetHieMd.htm)/[SetHieMd](SetHieMd.htm). Также
 моникёр, полученный при открытии, используется операцией [GetHieMembers](GetHieMembers.htm).


## Пример


Ниже приведён пример открытия иерархии показателей. В запросе передается
 моникёр базы данных временных рядов и шаблон, в соответствии с которым
 извлекается информация об иерархии показателей. В ответе приходит моникёр
 открытого экземпляра иерархии показателей и полученная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenHie xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tRub xmlns="****">
  <id>S1!M!S!R1</id>  </tRub>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <args />
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <props>true</props>  <asXml>true</asXml>  </metaGet>
  </tArg>
  </OpenHie>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenHieResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!H2</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>TS_DB</i>  <n>БД временных рядов</n>  <k>2147483646</k>  <c>2829</c>  <p>5472</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>0</isPermanent>  <isTemp>1</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../minus.gif)](../../#)<props>
  <whereIsEmpty>0</whereIsEmpty>  <leafLoadExtent>0</leafLoadExtent>  <filterMode>All</filterMode>  </props>
[![](../../minus.gif)](../../#)<asXml>
  <data><ITEMS VER="1" SEF="FALSE" EMPTY="0"><ITEM ATTR="4" INA="TRUE" NAMINGS=""><SELECTION MULTISELECT="1" NEW="" ALLOWCEG="TRUE" SELSCHONCE="0" SELSCHONRBLD="0" ISA="FALSE"/></ITEM><ITEM ATTR="9" INA="FALSE" NAMINGS=""><SELECTION MULTISELECT="1" NEW="" ALLOWCEG="TRUE" SELSCHONCE="0" SELSCHONRBLD="0" ISA="FALSE"/></ITEM></ITEMS></data>  </asXml>
  </meta>
  </OpenHieResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenHie" :
  {
   "tRub" :
    {
     "id" : "S1!M!S!R1"
    },
   "tArg" :
    {
     "args" : "",
     "metaGet" :
      {
       "obInst" : "true",
       "props" : "true",
       "asXml" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenHieResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!H2"
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
         "@ver" : "1",
         "@hf" : "0",
         "i" : "TS_DB",
         "n" : "БД временных рядов",
         "k" : "2147483646",
         "c" : "2829",
         "p" : "5472",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "0",
         "isTemp" : "1"
        }
      },
     "dirty" : "0",
     "props" :
      {
       "whereIsEmpty" : "0",
       "leafLoadExtent" : "0",
       "filterMode" : "All"
      },
     "asXml" :
      {
       "data" : "<ITEMS VER="1" SEF="FALSE" EMPTY="0"><ITEM ATTR="4" INA="TRUE" NAMINGS=""><SELECTION MULTISELECT="1" NEW="" ALLOWCEG="TRUE" SELSCHONCE="0" SELSCHONRBLD="0" ISA="FALSE"\/><\/ITEM><ITEM ATTR="9" INA="FALSE" NAMINGS=""><SELECTION MULTISELECT="1" NEW="" ALLOWCEG="TRUE" SELSCHONCE="0" SELSCHONRBLD="0" ISA="FALSE"\/><\/ITEM><\/ITEMS>"
      }
    }
  }
}


public static OpenHieResult OpenHierarchy(RubId rub)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tHie = new OpenHie()
    {
        tArg = new OpenHieArg()
        {
            args = new HieOpenArgs(),
            //Метаданные, которые необходимо извлечь при открытии иерархии
            metaGet = new HieMdPattern()
            {
                props = true,
                asXml = true
            }
        },
        tRub = rub
    };
    //Открытие иерархии показателей
    var result = somClient.OpenHie(tHie);
    return result;
}


См. также:


[Работа
 с базой данных временных рядов](TimeSeriesDatabase_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
