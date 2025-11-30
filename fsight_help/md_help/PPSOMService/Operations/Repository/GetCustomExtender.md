# GetCustomExtender: Операция

GetCustomExtender: Операция
-


**


# GetCustomExtender


## Синтаксис


GetCustomExtenderResult GetCustomExtender(CustomObId
 tCustomExtender, GetCustomExtenderArg tArg)


## Параметры


tCustomExtender. Моникёр
 открытого экземпляра контейнера пользовательских классов.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetCustomExtender получает
 метаданные контейнера пользовательских классов.


## Комментарии


Для выполнения операции укажите в поле tCustomExtender
 моникёр открытого экземпляра контейнера пользовательских классов, а в
 поле tArg.pattern шаблон для
 извлечения метаданных. Моникёр может быть получен при выполнении операции
 [OpenCustomExtender](OpenCustomExtender.htm).


Результатом выполнения операции будут полученные метаданные.


## Пример


Ниже приведён пример получения информации о пользовательских классах,
 созданных в репозитории. В запросе передаётся моникёр открытого экземпляра
 контейнера пользовательских классов и шаблон, определяющий получаемую
 о классах информацию. В ответе возвращается полученная информация о пользовательских
 классах.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetCustomExtender xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tCustomExtender xmlns="****">
  <id>KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M!S!EHOEIMLGLBNIEGOAEGENBNCJPPGLLDJPECJGLFKONMINLFOIP</id>  </tCustomExtender>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <classes>Get</classes>[![](../../minus.gif)](../../#)<customClass>
  <CustomOperations>Get</CustomOperations>  </customClass>
  <smallImages>Get</smallImages>  <largeImages>Get</largeImages>  <resource>true</resource>  </pattern>
  </tArg>
  </GetCustomExtender>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetCustomExtenderResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M!S!EHOEIMLGLBNIEGOAEGENBNCJPPGLLDJPECJGLFKONMINLFOIP</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**15**" hf="**0**">
  <i>OBJ52</i>  <n>Дополнения системных классов</n>  <k>52</k>  <c>5889</c>  <p>0</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../minus.gif)](../../#)<classes>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it ic="**1**">
  <k>19</k>  <id>COMPONENT</id>  <n>Компонент</n>  <vis>1</vis>  <implURL />
  <implCoreClass />
  <implAssembly>MOD_COMPONENT_CLASS_HANDLER</implAssembly>  <implClass>ComponentClassHandler</implClass>  <description />
[![](../../minus.gif)](../../#)<standardOperations>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>0</k>  <id>OPEN</id>  <n>Открыть</n>  <vis>1</vis>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>OPENWITHPARAMS</id>  <n>Открыть с параметрами</n>  <vis>1</vis>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>EDIT</id>  <n>Редактировать</n>  <vis>1</vis>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>3</k>  <id>DELETE</id>  <n>Удалить</n>  <vis>1</vis>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>4</k>  <id>PASTE</id>  <n>Вставить</n>  <vis>1</vis>  </it>
  </its>
  </standardOperations>
[![](../../minus.gif)](../../#)<operations>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>CLS19OP1</id>  <n>VCS</n>  <vis>1</vis>  </it>
  </its>
  </operations>
  <c>1251073</c>  <h>0</h>  </it>
[![](../../minus.gif)](../../#)<it ic="**1**">
  <k>16</k>  <id>BUSINESS_APPLICATION</id>  <n>Бизнес-приложение</n>  <vis>1</vis>  <implURL />
  <implCoreClass />
  <implAssembly>P10002_BUSINESS_APPLICATION_MOD</implAssembly>  <implClass>BusinessApplication</implClass>  <description>Конструктор бизнес-приложения</description>[![](../../minus.gif)](../../#)<standardOperations>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>0</k>  <id>OPEN</id>  <n>Открыть</n>  <vis>1</vis>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>OPENWITHPARAMS</id>  <n>Открыть с параметрами</n>  <vis>1</vis>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>EDIT</id>  <n>Редактировать</n>  <vis>1</vis>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>3</k>  <id>DELETE</id>  <n>Удалить</n>  <vis>1</vis>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>4</k>  <id>PASTE</id>  <n>Вставить</n>  <vis>1</vis>  </it>
  </its>
  </standardOperations>
[![](../../minus.gif)](../../#)<operations>
  <its />
  </operations>
  <c>1054465</c>  <h>0</h>  </it>
[![](../../minus.gif)](../../#)<it ic="**1**">
  <k>32</k>  <id>DATA_ENTRY_FORM_CLASS</id>  <n>Форма ввода/вывода</n>  <vis>1</vis>  <implURL>http://localhost/FP_App_v10.x/script/operation.js</implURL>  <implCoreAssemblyKey>374</implCoreAssemblyKey>  <implCoreClass>CustomClassOperationsHandlerWeb</implCoreClass>  <implAssembly>ASM_INPUT_FORM_V3_PRESENTERS</implAssembly>  <implClass>CustomClassOperationsHandler</implClass>  <description />
[![](../../minus.gif)](../../#)<standardOperations>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>0</k>  <id>OPEN</id>  <n>Открыть</n>  <vis>1</vis>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>OPENWITHPARAMS</id>  <n>Открыть с параметрами</n>  <vis>1</vis>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>EDIT</id>  <n>Редактировать</n>  <vis>1</vis>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>3</k>  <id>DELETE</id>  <n>Удалить</n>  <vis>1</vis>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>4</k>  <id>PASTE</id>  <n>Вставить</n>  <vis>1</vis>  </it>
  </its>
  </standardOperations>
[![](../../minus.gif)](../../#)<operations>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>CLS32OP1</id>  <n>Редактировать метаданные</n>  <vis>1</vis>  </it>
  </its>
  </operations>
  <c>2103041</c>  <h>0</h>  </it>
  </its>
  </classes>
  </meta>
  </GetCustomExtenderResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetCustomExtender" :
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
       "classes" : "Get",
       "customClass" :
        {
         "CustomOperations" : "Get"
        },
       "smallImages" : "Get",
       "largeImages" : "Get",
       "resource" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetCustomExtenderResult" :
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
     "dirty" : "0",
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
             "standardOperations" :
              {
               "its" :
                {
                 "it" :
                  [
                    {
                     "k" : "0",
                     "id" : "OPEN",
                     "n" : "Открыть",
                     "vis" : "1"
                    },
                    {
                     "k" : "1",
                     "id" : "OPENWITHPARAMS",
                     "n" : "Открыть с параметрами",
                     "vis" : "1"
                    },
                    {
                     "k" : "2",
                     "id" : "EDIT",
                     "n" : "Редактировать",
                     "vis" : "1"
                    },
                    {
                     "k" : "3",
                     "id" : "DELETE",
                     "n" : "Удалить",
                     "vis" : "1"
                    },
                    {
                     "k" : "4",
                     "id" : "PASTE",
                     "n" : "Вставить",
                     "vis" : "1"
                    }
                  ]
                }
              },
             "operations" :
              {
               "its" :
                {
                 "it" :
                  [
                    {
                     "k" : "1",
                     "id" : "CLS19OP1",
                     "n" : "VCS",
                     "vis" : "1"
                    }
                  ]
                }
              },
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
             "standardOperations" :
              {
               "its" :
                {
                 "it" :
                  [
                    {
                     "k" : "0",
                     "id" : "OPEN",
                     "n" : "Открыть",
                     "vis" : "1"
                    },
                    {
                     "k" : "1",
                     "id" : "OPENWITHPARAMS",
                     "n" : "Открыть с параметрами",
                     "vis" : "1"
                    },
                    {
                     "k" : "2",
                     "id" : "EDIT",
                     "n" : "Редактировать",
                     "vis" : "1"
                    },
                    {
                     "k" : "3",
                     "id" : "DELETE",
                     "n" : "Удалить",
                     "vis" : "1"
                    },
                    {
                     "k" : "4",
                     "id" : "PASTE",
                     "n" : "Вставить",
                     "vis" : "1"
                    }
                  ]
                }
              },
             "operations" :
              {
               "its" : ""
              },
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
             "standardOperations" :
              {
               "its" :
                {
                 "it" :
                  [
                    {
                     "k" : "0",
                     "id" : "OPEN",
                     "n" : "Открыть",
                     "vis" : "1"
                    },
                    {
                     "k" : "1",
                     "id" : "OPENWITHPARAMS",
                     "n" : "Открыть с параметрами",
                     "vis" : "1"
                    },
                    {
                     "k" : "2",
                     "id" : "EDIT",
                     "n" : "Редактировать",
                     "vis" : "1"
                    },
                    {
                     "k" : "3",
                     "id" : "DELETE",
                     "n" : "Удалить",
                     "vis" : "1"
                    },
                    {
                     "k" : "4",
                     "id" : "PASTE",
                     "n" : "Вставить",
                     "vis" : "1"
                    }
                  ]
                }
              },
             "operations" :
              {
               "its" :
                {
                 "it" :
                  [
                    {
                     "k" : "1",
                     "id" : "CLS32OP1",
                     "n" : "Редактировать метаданные",
                     "vis" : "1"
                    }
                  ]
                }
              },
             "c" : "2103041",
             "h" : "0"
            }
          ]
        }
      }
    }
  }
}


public static GetCustomExtenderResult GetCustomExtender(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetCustomExtender()
    {
        tArg = new GetCustomExtenderArg()
        {
            pattern = new CustomExtenderMdPattern()
            {
                classes = ListOperation.Get,
                customClass = new CustomClassPattern()
                {
                    CustomOperations = ListOperation.Get
                },
                largeImages = ListOperation.Get,
                smallImages = ListOperation.Get,
                resource = true
            }
        },
        tCustomExtender = new CustomObId() { id = moniker }
    };
    // Получение метаданных контейнера пользовательских классов
    var tResult = somClient.GetCustomExtender(tGet);
    return tResult;
}


См. также:


[Работа
 с объектами пользовательских классов](Custom_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
