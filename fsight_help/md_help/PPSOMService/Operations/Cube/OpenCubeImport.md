# OpenCubeImport: Операция

OpenCubeImport: Операция
-


**


# OpenCubeImport


## Синтаксис


OpenCubeImportResult OpenCubeImport(OdId tOb, OpenCubeImportArg
 tArg)


## Параметры


tOb. Моникёр родительского
 объекта, в рамках которого осуществляется выполнение операции.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenCubeImport создает
 объект импорта данных в куб и возвращает контекст для работы с ним.


## Комментарии


При выполнении операции в памяти BI-сервера будет создан новый объект,
 предназначенный для импорта данных. Для настройки параметров полученного
 объекта, а также для запуска процесса импорта, используйте операцию [SetCubeImport](SetCubeImport.htm).
 Узнать состояние объекта импорта можно с помощью операции [GetCubeImport](GetCubeImport.htm).


Для выполнения операции OpenCubeImport
 необходимо в поле tObj указать
 моникёр и в поле tArg указать
 параметры создания объекта импорта. В качестве значения моникера указывается
 моникёр корневой папки репозитория.


После импорта данных для освобождения ресурсов BI-сервера вызовите операцию
 [CloseCubeImport](CloseCubeImport.htm).


## Пример


	 SOAP  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenCubeImport xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>APJPBGEDEHLPFOAEJOPLMILHOOECMEPEOJKDMJHCGFMKDNKM!M!0</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <all>true</all>  </metaGet>
  </tArg>
  </OpenCubeImport>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenCubeImportResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>APJPBGEDEHLPFOAEJOPLMILHOOECMEPEOJKDMJHCGFMKDNKM!M!S!IDGLAIGEDEHLPFOAEPEOHNINBKMJBOEEEAINBLLIJNBNHEPDJ</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>WAREHOUSE</i>  <n>Warehouse</n>  <k>0</k>  <c>0</c>  <p>-1</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
[![](../../minus.gif)](../../#)<dimBinds>
  <its />
  </dimBinds>
[![](../../minus.gif)](../../#)<factBinds>
  <its />
  <newDictionaryName />
  </factBinds>
[![](../../minus.gif)](../../#)<parent ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>WAREHOUSE</i>  <n>Warehouse</n>  <k>0</k>  <c>0</c>  <p>-1</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </parent>
  <resultType>Cube</resultType>  <addAllFields>0</addAllFields>  <editExistingObject>0</editExistingObject>  <createStoredView>0</createStoredView>  <createETLTask>0</createETLTask>  <loadDuplicates>0</loadDuplicates>  </meta>
  </OpenCubeImportResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenCubeImport" :
  {
   "tOb" :
    {
     "id" : "APJPBGEDEHLPFOAEJOPLMILHOOECMEPEOJKDMJHCGFMKDNKM!M!0"
    },
   "tArg" :
    {
     "metaGet" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "all" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenCubeImportResult" :
  {
   "id" :
    {
     "id" : "APJPBGEDEHLPFOAEJOPLMILHOOECMEPEOJKDMJHCGFMKDNKM!M!S!IDGLAIGEDEHLPFOAEPEOHNINBKMJBOEEEAINBLLIJNBNHEPDJ"
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
         "@ver" : "0",
         "@hf" : "0",
         "i" : "WAREHOUSE",
         "n" : "Warehouse",
         "k" : "0",
         "c" : "0",
         "p" : "4294967295",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dimBinds" :
      {
       "its" : ""
      },
     "factBinds" :
      {
       "its" : "",
       "newDictionaryName" : ""
      },
     "parent" :
      {
       "@ds" : "",
       "@isShortcut" : "0",
       "@isLink" : "0",
       "@ver" : "0",
       "@hf" : "0",
       "i" : "WAREHOUSE",
       "n" : "Warehouse",
       "k" : "0",
       "c" : "0",
       "p" : "4294967295",
       "h" : "0",
       "hasPrv" : "0",
       "ic" : "0",
       "trackElementDependents" : "0"
      },
     "resultType" : "Cube",
     "addAllFields" : "0",
     "editExistingObject" : "0",
     "createStoredView" : "0",
     "createETLTask" : "0",
     "loadDuplicates" : "0"
    }
  }
}


public static OpenCubeImportResult OpenCubeImport(MbId mb)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenCubeImport()
    {
        tArg = new OpenCubeImportArg()
        {
            metaGet = new CubeImportMdPattern()
            {
                all = true
            }
        },
        tOb = new OdId()
        {
            id = mb.id + "!0"
        }
    };
    //Создание объекта импорта данных в куб
    var result = somClient.OpenCubeImport(tOpen);
    return result;
}


См. также:


[Работа с
 кубами](Cube_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
