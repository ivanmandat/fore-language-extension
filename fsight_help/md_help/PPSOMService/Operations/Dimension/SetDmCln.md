# SetDmCln: Операция

SetDmCln: Операция
-


**


# SetDmCln


## Синтаксис


SetDmClnResult SetDmCln(DmId tDim, SetDmClnArg tArg)


## Параметры


tDim. Моникёр
 открытого экземпляра календарного справочника.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDmCln изменяет метаданные
 календарного справочника.


## Комментарии


Данная операция позволяет изменить структуру и настройки календарного
 справочника: используемую иерархию, уровни, пользовательские атрибуты,
 пределы календаря, а также другие настройки, влияющие на работу справочника.
 Для выполнения операции укажите в поле tDim
 моникёр экземпляра календарного справочника, а в поле tArg
 параметры выполнения операции. Моникёр может быть получен при выполнении
 операции [OpenDim](OpenDim.htm).
 В поле tArg.meta укажите изменяемые
 метаданные. В определённых случаях, например при работе с атрибутами,
 также необходимо в поле tArg.pattern
 определить шаблон, в соответствии с которым будут производиться изменения.
 После внесения изменений для сохранения справочника используйте операцию
 [SaveObject](../Repository/SaveObject.htm)
 или [SaveObjectAs](../Repository/SaveObjectAs.htm).
 Результатом работы операции будут обновлённые метаданные, если был указан
 шаблон tArg.metaGet.


## Пример


Ниже приведён пример использования операции SetDmCln
 для изменения структуры календарного справочника - в структуре справочника
 включается уровень «Корень». В запросе передаётся моникёр справочника
 и метаданные с информацией о добавляемом уровне календаря. В ответе приходит
 обновлённая информация о календарном справочнике.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDmCln xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tDim xmlns="****">
  <id>S1!M!S!DM2</id>  </tDim>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  </pattern>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<levelInUse>
  <levelIndex>0</levelIndex>  <res>true</res>  </levelInUse>
  </meta>
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>[![](../../minus.gif)](../../#)<levelInUse>
  <levelIndex>0</levelIndex>  </levelInUse>
  </metaGet>
  </tArg>
  </SetDmCln>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetDmClnResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!DM2</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**9**" hf="**0**">
  <i>CALENDAR</i>  <n>Календарь</n>  <k>112</k>  <c>1026</c>  <p>103</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>  <startYear>2000</startYear>  <endYear>2003</endYear>  <startYearAsParam>0</startYearAsParam>  <endYearAsParam>0</endYearAsParam>  <hierarchy>0</hierarchy>[![](../../minus.gif)](../../#)<levelInUse>
  <levelIndex>0</levelIndex>  <res>1</res>  </levelInUse>
  <attrCount>9</attrCount>  <levelCount>6</levelCount>  <reverseOrder>0</reverseOrder>  <shiftForward>0</shiftForward>  <hierarchyCorrection>0</hierarchyCorrection>  <lastLevelNameAsDay>0</lastLevelNameAsDay>  <defaultOpenType>Hierarchical</defaultOpenType>  <isDynamicAttrs>1</isDynamicAttrs>  </meta>
  </SetDmClnResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDmCln" :
  {
   "tDim" :
    {
     "id" : "S1!M!S!DM2"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true"
      },
     "meta" :
      {
       "levelInUse" :
        {
         "levelIndex" : "0",
         "res" : "true"
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "levelInUse" :
        {
         "levelIndex" : "0"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetDmClnResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!DM2"
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
         "@ver" : "9",
         "@hf" : "0",
         "i" : "CALENDAR",
         "n" : "Календарь",
         "k" : "112",
         "c" : "1026",
         "p" : "103",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "startYear" : "2000",
     "endYear" : "2003",
     "startYearAsParam" : "0",
     "endYearAsParam" : "0",
     "hierarchy" : "0",
     "levelInUse" :
      {
       "levelIndex" : "0",
       "res" : "1"
      },
     "attrCount" : "9",
     "levelCount" : "6",
     "reverseOrder" : "0",
     "shiftForward" : "0",
     "hierarchyCorrection" : "0",
     "lastLevelNameAsDay" : "0",
     "defaultOpenType" : "Hierarchical",
     "isDynamicAttrs" : "1"
    }
  }
}


public static SetDmClnResult ChangeCalendar(DmId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetDmCln()
    {
        tArg = new SetDmClnArg()
        {
            pattern = new DmClnMdPattern(),
            meta = new DmClnMd()
            {
                levelInUse = new DmClnLevelInUse() { levelIndex = 0, res = true }
            },
            metaGet = new DmClnMdPattern()
            {
                levelInUse = new DmClnLevelInUse() { levelIndex = 0 }
            }
        },
        tDim = moniker
    };
    //Изменение календарного справочника
    var result = somClient.SetDmCln(tSet);
    return result;
}


См. также:


[Работа
 со справочниками](Dimension_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
