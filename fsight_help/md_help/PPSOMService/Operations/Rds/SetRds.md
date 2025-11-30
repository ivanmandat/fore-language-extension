# SetRds: Операция

SetRds: Операция
-


**


# SetRds


## Синтаксис


SetRdsResult SetRds(RdsId tRds, SetRdsArg tArg)


## Параметры


tRds. Моникёр
 экземпляра справочника НСИ.


tArg. Параметры изменения метаданных.


## Описание


Операция SetRds изменяет метаданные
 справочника НСИ.


## Комментарии


Данная операция позволяет изменить следующую информацию о структуре
 справочника НСИ:


	- Информация об атрибутах;


	- Информация о параметрах;


	- Информация о связях с другими справочниками;


	- Информация об уровнях;


	- Информацию об уникальных и неуникальных ключах;


	- Информацию о схемах импорта и экспорта;


	- Параметры перевода справочника на другие языки.


Для выполнения операции необходимо в параметре tRds
 указать моникёр открытого экземпляра справочника, а в параметре tArg указать параметры изменения.
 Моникёр может быть получен при выполнении операции OpenRds.
 В поле tArg.pattern указывается
 шаблон, в соответствии с которым будут производиться изменения, а в поле
 tArg.meta обновленные метаданные.
 Для сохранения измененного справочника НСИ после операции SetRds
 выполните операцию [SaveObject](../Repository/SaveObject.htm)
 или [SaveObjectAs](../Repository/SaveObjectAs.htm).


Результатом работы операции SetRds
 будет моникёр измененного справочника и запрошенные метаданные, если при
 выполнении операции было определено поле tArg.metaGet.


## Пример


Пример добавления уровня в структуру справочника НСИ. В запросе передается
 моникёр справочника, шаблон, указывающий необходимость добавить уровень
 и метаданные создаваемого уровня. В ответе приходит информация обо всех
 уровнях справочника.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetRds xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tRds xmlns="****">
  <id>S1!M!S!N2</id>  </tRds>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <levels>Add</levels>  </pattern>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<levels>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id>LEVEL_</id>  <n>Дополнительный</n>  <vis>true</vis>  </it>
  </its>
  </levels>
  </meta>
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <levels>Get</levels>  </metaGet>
  </tArg>
  </SetRds>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetRdsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!N2</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**4**" hf="**0**">
  <i>FACT_ELEMENTS</i>  <n>Справочник с показателями</n>  <k>219797</k>  <c>3076</c>  <p>5611</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>[![](../../minus.gif)](../../#)<levels>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>LEVEL_</id>  <n>Дополнительный</n>  <vis>1</vis>  </it>
  </its>
  </levels>
  <timeDependency>TimeReadOnly</timeDependency>  <eeCallback />
  <isHierarchical>1</isHierarchical>  <isSecured>0</isSecured>  <manageVisibility>0</manageVisibility>  <isCompound>0</isCompound>  <isBigDictionary>0</isBigDictionary>  <hasMandatoryAccess>0</hasMandatoryAccess>  <hasDimMultipleValues>1</hasDimMultipleValues>  <defaultElementKey>-1</defaultElementKey>  <isAbacSecured>0</isAbacSecured>  </meta>
  </SetRdsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetRds" :
  {
   "tRds" :
    {
     "id" : "S1!M!S!N2"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "levels" : "Add"
      },
     "meta" :
      {
       "levels" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "-1",
               "id" : "LEVEL_",
               "n" : "Дополнительный",
               "vis" : "true"
              }
            ]
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "levels" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "SetRdsResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!N2"
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
         "i" : "FACT_ELEMENTS",
         "n" : "Справочник с показателями",
         "k" : "219797",
         "c" : "3076",
         "p" : "5611",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "1",
     "levels" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "1",
             "id" : "LEVEL_",
             "n" : "Дополнительный",
             "vis" : "1"
            }
          ]
        }
      },
     "timeDependency" : "TimeReadOnly",
     "eeCallback" : "",
     "isHierarchical" : "1",
     "isSecured" : "0",
     "manageVisibility" : "0",
     "isCompound" : "0",
     "isBigDictionary" : "0",
     "hasMandatoryAccess" : "0",
     "hasDimMultipleValues" : "1",
     "defaultElementKey" : "4294967295",
     "isAbacSecured" : "0"
    }
  }
}


public static SetRdsResult ChangeRDSStructure(RdsId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetRds()
    {
        tArg = new SetRdsArg()
        {
            pattern = new RdsMdPattern()
            {
                levels = ListOperation.Add
            },
            meta = new RdsMd()
            {
                levels = new RdsLevels()
                {
                    its = new RdsLevel[]
                    {
                        new RdsLevel()
                        {
                            k = uint.MaxValue,
                            id = "LEVEL_" ,
                            n = "Дополнительный" ,
                            vis = true
                        }
                    }
                }
            },
            metaGet = new RdsMdPattern()
            {
                levels = ListOperation.Get
            }
        },
        tRds = moniker
    };
    //Изменение структуры справочника
    var result = somClient.SetRds(tSet);
    return result;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
