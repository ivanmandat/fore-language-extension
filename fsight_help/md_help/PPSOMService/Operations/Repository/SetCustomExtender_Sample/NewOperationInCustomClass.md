# Создание операции в пользовательском классе: Операция SetCustomExtender

Создание операции в пользовательском классе: Операция SetCustomExtender
-


**


# Создание операции в пользовательском классе


Ниже приведён пример создания новой операции в пользовательском классе.
 В запросе передаётся моникёр открытого экземпляра контейнера пользовательского
 класса, шаблон, указывающий необходимость создания новой операции и класс,
 в котором создаётся операция. В ответе возвращается обновлённая информация
 об изменяемом пользовательском классе.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetCustomExtender xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCustomExtender xmlns="****">
  <id>KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M!S!EHOEIMLGLBNIEGOAEGENBNCJPPGLLDJPECJGLFKONMINLFOIP</id>  </tCustomExtender>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <classes>Change</classes>[![](../../../minus.gif)](../../../#)<customClass>
  <CustomOperationsWeb>Add</CustomOperationsWeb>  </customClass>
  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<classes>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>33</k>[![](../../../minus.gif)](../../../#)<operationsWeb>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>-1</k>  <id>EXPORT</id>  <handlerKey>10101</handlerKey>  </it>
  </its>
  </operationsWeb>
  </it>
  </its>
  </classes>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <classes>Get</classes>[![](../../../minus.gif)](../../../#)<classesFilter>
[![](../../../minus.gif)](../../../#)<keys>
  <u>33</u>  </keys>
  </classesFilter>
[![](../../../minus.gif)](../../../#)<customClass>
  <CustomOperationsWeb>Get</CustomOperationsWeb>  </customClass>
  </metaGet>
  </tArg>
  </SetCustomExtender>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetCustomExtenderResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M!S!EHOEIMLGLBNIEGOAEGENBNCJPPGLLDJPECJGLFKONMINLFOIP</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**15**" hf="**0**">
  <i>OBJ52</i>  <n>Дополнения системных классов</n>  <k>52</k>  <c>5889</c>  <p>0</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>[![](../../../minus.gif)](../../../#)<classes>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it ic="**0**">
  <k>33</k>  <id>OBJ10105</id>  <n>CustomClass</n>  <vis>1</vis>  <implURL />
  <implCoreClass />
  <implClass />
  <description />
[![](../../../minus.gif)](../../../#)<standardOperationsWeb>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <id>CREATEOBJECT</id>  <n>Создать</n>  <vis>1</vis>  <isCore>0</isCore>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <id>OPEN</id>  <n>Открыть</n>  <vis>1</vis>  <isCore>0</isCore>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>EDIT</id>  <n>Редактировать</n>  <vis>1</vis>  <isCore>0</isCore>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>3</k>  <id>DELETE</id>  <n>Удалить</n>  <vis>1</vis>  <isCore>1</isCore>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>4</k>  <id>PASTE</id>  <n>Вставить</n>  <vis>1</vis>  <isCore>1</isCore>  </it>
  </its>
  </standardOperationsWeb>
[![](../../../minus.gif)](../../../#)<operationsWeb>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <id>EXPORT</id>  <n>Операция 1</n>  <vis>1</vis>  <handlerKey>10101</handlerKey>  <isCore>0</isCore>  </it>
  </its>
  </operationsWeb>
  <c>2168577</c>  <h>0</h>  </it>
  </its>
  </classes>
  </meta>
  </SetCustomExtenderResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetCustomExtender" :
  {
   "tCustomExtender" :
    {
     "id" : "KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M!S!EHOEIMLGLBNIEGOAEGENBNCJPPGLLDJPECJGLFKONMINLFOIP"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "classes" : "Change",
       "customClass" :
        {
         "CustomOperationsWeb" : "Add"
        }
      },
     "meta" :
      {
       "classes" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "33",
               "operationsWeb" :
                {
                 "its" :
                  {
                   "it" :
                    [
                      {
                       "k" : "-1",
                       "id" : "EXPORT",
                       "handlerKey" : "10101"
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "classes" : "Get",
       "classesFilter" :
        {
         "keys" :
          {
           "u" : "33"
          }
        },
       "customClass" :
        {
         "CustomOperationsWeb" : "Get"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetCustomExtenderResult" :
  {
   "id" :
    {
     "id" : "KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M!S!EHOEIMLGLBNIEGOAEGENBNCJPPGLLDJPECJGLFKONMINLFOIP"
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
         "@ver" : "15",
         "@hf" : "0",
         "i" : "OBJ52",
         "n" : "Дополнения системных классов",
         "k" : "52",
         "c" : "5889",
         "p" : "0",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "1",
     "classes" :
      {
       "its" :
        {
         "it" :
          [
            {
             "@ic" : "0",
             "k" : "33",
             "id" : "OBJ10105",
             "n" : "CustomClass",
             "vis" : "1",
             "implURL" : "",
             "implCoreClass" : "",
             "implClass" : "",
             "description" : "",
             "standardOperationsWeb" :
              {
               "its" :
                {
                 "it" :
                  [
                    {
                     "k" : "0",
                     "id" : "CREATEOBJECT",
                     "n" : "Создать",
                     "vis" : "1",
                     "isCore" : "0"
                    },
                    {
                     "k" : "1",
                     "id" : "OPEN",
                     "n" : "Открыть",
                     "vis" : "1",
                     "isCore" : "0"
                    },
                    {
                     "k" : "2",
                     "id" : "EDIT",
                     "n" : "Редактировать",
                     "vis" : "1",
                     "isCore" : "0"
                    },
                    {
                     "k" : "3",
                     "id" : "DELETE",
                     "n" : "Удалить",
                     "vis" : "1",
                     "isCore" : "1"
                    },
                    {
                     "k" : "4",
                     "id" : "PASTE",
                     "n" : "Вставить",
                     "vis" : "1",
                     "isCore" : "1"
                    }
                  ]
                }
              },
             "operationsWeb" :
              {
               "its" :
                {
                 "it" :
                  [
                    {
                     "k" : "1",
                     "id" : "EXPORT",
                     "n" : "Операция 1",
                     "vis" : "1",
                     "handlerKey" : "10101",
                     "isCore" : "0"
                    }
                  ]
                }
              },
             "c" : "2168577",
             "h" : "0"
            }
          ]
        }
      }
    }
  }
}


public static SetCustomExtenderResult AddOperationInCustomClass(string moniker, CustomClass changedClass, uint webFormKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetCustomExtender()
    {
        tArg = new SetCustomExtenderArg()
        {
            pattern = new CustomExtenderMdPattern()
            {
                classes = ListOperation.Change,
                customClass = new CustomClassPattern()
                {
                    CustomOperationsWeb = ListOperation.Add
                }
            },
            meta = new CustomExtenderMd()
            {
                classes = new CustomClasses()
                {
                    its = new CustomClass[]
                    {
                        new CustomClass()
                        {
                            k = changedClass.k,
                            operationsWeb = new CustomOperationsWeb()
                            {
                                its = new CustomOperationWeb[]
                                {
                                    new CustomOperationWeb()
                                    {
                                        k = uint.MaxValue,
                                        id = "EXPORT",
                                        handlerKey = webFormKey
                                    }
                                }
                            }
                        }
                    }
                }
            },
            metaGet = new CustomExtenderMdPattern()
            {
                classes = ListOperation.Get,
                classesFilter = new CustomClassesFilter()
                {
                    keys = new uint[]
                    {
                        (uint)changedClass.k
                    }
                },
                customClass = new CustomClassPattern()
                {
                    CustomOperationsWeb = ListOperation.Get
                }
            }
        },
        tCustomExtender = new CustomObId() { id = moniker }
    };
    // Создание операции, доступной в веб-приложении
    var tResult = somClient.SetCustomExtender(tSet);
    return tResult;
}


См. также:


[SetCustomExtender:
 Операция](../SetCustomExtender.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
