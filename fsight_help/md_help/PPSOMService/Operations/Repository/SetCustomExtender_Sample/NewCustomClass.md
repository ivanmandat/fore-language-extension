# Создание пользовательского класса: Операция SetCustomExtender

Создание пользовательского класса: Операция SetCustomExtender
-


**


# Создание пользовательского класса


Ниже приведён пример создания нового пользовательского класса. В запросе
 передаётся моникёр открытого экземпляра контейнера пользовательского класса
 и шаблон, указывающий необходимость создания нового класса. В ответе возвращается
 обновлённый список имеющихся пользовательских классов.


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
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <classes>Add</classes>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<classes>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>-1</k>[![](../../../minus.gif)](../../../#)<operations>
  <its />
  </operations>
  </it>
  </its>
  </classes>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <all>true</all>  </metaGet>
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
[![](../../../minus.gif)](../../../#)<it ic="**1**">
  <k>19</k>  <id>COMPONENT</id>  <n>Компонент</n>  <vis>1</vis>  <implURL />
  <implCoreClass />
  <implAssembly>MOD_COMPONENT_CLASS_HANDLER</implAssembly>  <implClass>ComponentClassHandler</implClass>  <description />
  <c>1251073</c>  <h>0</h>  </it>
[![](../../../minus.gif)](../../../#)<it ic="**1**">
  <k>16</k>  <id>BUSINESS_APPLICATION</id>  <n>Бизнес-приложение</n>  <vis>1</vis>  <implURL />
  <implCoreClass />
  <implAssembly>P10002_BUSINESS_APPLICATION_MOD</implAssembly>  <implClass>BusinessApplication</implClass>  <description>Конструктор бизнес-приложения</description>  <c>1054465</c>  <h>0</h>  </it>
[![](../../../minus.gif)](../../../#)<it ic="**1**">
  <k>32</k>  <id>DATA_ENTRY_FORM_CLASS</id>  <n>Форма ввода/вывода</n>  <vis>1</vis>  <implURL>http://localhost/FP_App_v10.x/script/operation.js</implURL>  <implCoreAssemblyKey>374</implCoreAssemblyKey>  <implCoreClass>CustomClassOperationsHandlerWeb</implCoreClass>  <implAssembly>ASM_INPUT_FORM_V3_PRESENTERS</implAssembly>  <implClass>CustomClassOperationsHandler</implClass>  <description />
  <c>2103041</c>  <h>0</h>  </it>
[![](../../../minus.gif)](../../../#)<it ic="**0**">
  <k>33</k>  <id>OBJ10105</id>  <n>CustomClass</n>  <vis>1</vis>  <implURL />
  <implCoreClass />
  <implClass />
  <description />
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
       "classes" : "Add"
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
               "k" : "-1",
               "operations" :
                {
                 "its" : ""
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
       "all" : "true"
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
             "@ic" : "1",
             "k" : "19",
             "id" : "COMPONENT",
             "n" : "Компонент",
             "vis" : "1",
             "implURL" : "",
             "implCoreClass" : "",
             "implAssembly" : "MOD_COMPONENT_CLASS_HANDLER",
             "implClass" : "ComponentClassHandler",
             "description" : "",
             "c" : "1251073",
             "h" : "0"
            },
            {
             "@ic" : "1",
             "k" : "16",
             "id" : "BUSINESS_APPLICATION",
             "n" : "Бизнес-приложение",
             "vis" : "1",
             "implURL" : "",
             "implCoreClass" : "",
             "implAssembly" : "P10002_BUSINESS_APPLICATION_MOD",
             "implClass" : "BusinessApplication",
             "description" : "Конструктор бизнес-приложения",
             "c" : "1054465",
             "h" : "0"
            },
            {
             "@ic" : "1",
             "k" : "32",
             "id" : "DATA_ENTRY_FORM_CLASS",
             "n" : "Форма ввода\/вывода",
             "vis" : "1",
             "implURL" : "http:\/\/localhost\/FP_App_v10.x\/script\/operation.js",
             "implCoreAssemblyKey" : "374",
             "implCoreClass" : "CustomClassOperationsHandlerWeb",
             "implAssembly" : "ASM_INPUT_FORM_V3_PRESENTERS",
             "implClass" : "CustomClassOperationsHandler",
             "description" : "",
             "c" : "2103041",
             "h" : "0"
            },
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
             "c" : "2168577",
             "h" : "0"
            }
          ]
        }
      }
    }
  }
}


public static SetCustomExtenderResult NewClassInCustomExtender(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetCustomExtender()
    {
        tArg = new SetCustomExtenderArg()
        {
            pattern = new CustomExtenderMdPattern()
            {
                classes = ListOperation.Add
            },
            meta = new CustomExtenderMd()
            {
                classes = new CustomClasses()
                {
                    its = new CustomClass[]
                    {
                        new CustomClass()
                        {
                            k = uint.MaxValue,
                            operations = new CustomOperations()
                            {
                                its = new CustomOperation[] { }
                            }
                        }
                    }
                }
            },
            metaGet = new CustomExtenderMdPattern()
            {
                all = true
            }
        },
        tCustomExtender = new CustomObId() { id = moniker }
    };
    // Создание пользовательского класса
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
