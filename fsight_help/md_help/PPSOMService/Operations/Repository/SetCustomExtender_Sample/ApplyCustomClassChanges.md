# Применение изменений в пользовательском классе: Операция SetCustomExtender

Применение изменений в пользовательском классе: Операция SetCustomExtender
-


**


# Применение изменений в пользовательском классе


Ниже приведён пример применения изменений в пользовательском классе.
 В запросе передаётся моникёр открытого экземпляра контейнера пользовательского
 класса и изменённые метаданные класса. В ответе какие-либо метаданные
 не возвращаются.


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
  <CustomOperations>Change</CustomOperations>  </customClass>
  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<classes>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it ic="**false**">
  <k>33</k>  <id>CUSTOM_OBJECT_WEB</id>  <n>Пользовательский объект</n>  <vis>true</vis>  <implURL />
  <implCoreAssemblyKey>10100</implCoreAssemblyKey>  <implCoreClass>WebOperationsClass</implCoreClass>  <implClass />
  <description />
[![](../../../minus.gif)](../../../#)<standardOperationsWeb>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <id>CREATEOBJECT</id>  <n>Создать</n>  <vis>true</vis>  <isCore>false</isCore>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <id>OPEN</id>  <n>Открыть</n>  <vis>true</vis>  <isCore>false</isCore>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>EDIT</id>  <n>Редактировать</n>  <vis>true</vis>  <isCore>false</isCore>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>3</k>  <id>DELETE</id>  <n>Удалить</n>  <vis>true</vis>  <isCore>true</isCore>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>4</k>  <id>PASTE</id>  <n>Вставить</n>  <vis>true</vis>  <isCore>true</isCore>  </it>
  </its>
  </standardOperationsWeb>
[![](../../../minus.gif)](../../../#)<operationsWeb>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <id>EXPORT</id>  <n>Экспорт объекта</n>  <vis>true</vis>  <handlerKey>10101</handlerKey>  <isCore>false</isCore>  </it>
  </its>
  </operationsWeb>
  <c>2168577</c>  <h>false</h>  </it>
  </its>
  </classes>
  </meta>
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
         "CustomOperations" : "Change"
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
               "@ic" : "false",
               "k" : "33",
               "id" : "CUSTOM_OBJECT_WEB",
               "n" : "Пользовательский объект",
               "vis" : "true",
               "implURL" : "",
               "implCoreAssemblyKey" : "10100",
               "implCoreClass" : "WebOperationsClass",
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
                       "vis" : "true",
                       "isCore" : "false"
                      },
                      {
                       "k" : "1",
                       "id" : "OPEN",
                       "n" : "Открыть",
                       "vis" : "true",
                       "isCore" : "false"
                      },
                      {
                       "k" : "2",
                       "id" : "EDIT",
                       "n" : "Редактировать",
                       "vis" : "true",
                       "isCore" : "false"
                      },
                      {
                       "k" : "3",
                       "id" : "DELETE",
                       "n" : "Удалить",
                       "vis" : "true",
                       "isCore" : "true"
                      },
                      {
                       "k" : "4",
                       "id" : "PASTE",
                       "n" : "Вставить",
                       "vis" : "true",
                       "isCore" : "true"
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
                       "n" : "Экспорт объекта",
                       "vis" : "true",
                       "handlerKey" : "10101",
                       "isCore" : "false"
                      }
                    ]
                  }
                },
               "c" : "2168577",
               "h" : "false"
              }
            ]
          }
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
    }
  }
}


public static SetCustomExtenderResult ApplyCustomClassChanges(string moniker, CustomClass changedClass)
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
                    CustomOperations = ListOperation.Change
                }
            },
            meta = new CustomExtenderMd()
            {
                classes = new CustomClasses()
                {
                    its = new CustomClass[]
                    {
                        changedClass
                    }
                }
            }
        },
        tCustomExtender = new CustomObId() { id = moniker }
    };
    // Изменение настроек пользовательского класса
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
