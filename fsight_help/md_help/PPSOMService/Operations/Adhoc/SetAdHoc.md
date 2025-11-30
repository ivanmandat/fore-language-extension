# SetAdHoc: Операция

SetAdHoc: Операция
-


**


# SetAdHoc


## Синтаксис


SetAdHocResult SetAdHoc(AdHocId tAdHocId, SetAdHocMdArg
 tArg)


## Параметры


tAdHocId. Моникёр открытого
 экземпляра аналитической панели.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetAdHoc изменяет метаданные
 аналитической панели.


## Комментарии


Данная операция позволяет изменить структуру аналитической панели (задать
 разметку, определить источники данных для блоков), настроить параметры
 синхронизации измерений, определить параметры слайдов. Для выполнения
 операции укажите в поле tAdHocId
 моникёр экземпляра аналитической панели, в поле tArg.pattern
 шаблон, в соответствии с которым будут изменяться метаданные, а в поле
 tArg.meta обновленные метаданные.
 Моникёр может быть получен при выполнении операции [OpenAdhoc](OpenAdHoc.htm). Если определить поле tArg.metaGet то результатом работы
 операции будут обновленные метаданные, полученные после их изменения.
 После внесения изменений для сохранения аналитической панели используйте
 операцию [SaveObject](../Repository/SaveObject.htm)
 или [SaveObjectAs](../Repository/SaveObjectAs.htm).


## Пример


Пример изменения активного слайда в аналитической панели. В теле запроса
 передается идентификатор слайда, который необходимо сделать активным и
 шаблон, указывающий необходимость изменить информацию о слайдах. В ответе
 приходит обновлённая общая информация о слайдах аналитической панели.


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


		[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


				[![](../../minus.gif)](../../#)<SetAdHoc
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


					[![](../../minus.gif)](../../#)<tAdHocId xmlns="** **">


						  <id>S1!M!S!AdHoc1</id>


					  </tAdHocId>


					[![](../../minus.gif)](../../#)<tArg xmlns="** **">


						[![](../../minus.gif)](../../#)<meta>


							[![](../../minus.gif)](../../#)<Md8>


								  <activeSlideId>SD7OZR42LYHXHA2V</activeSlideId>


							  </Md8>


						  </meta>


						[![](../../minus.gif)](../../#)<pattern>


							  <obInst>true</obInst>


							[![](../../minus.gif)](../../#)<layout>


								  <activeSlideId>true</activeSlideId>


								  <slides>Set</slides>


							  </layout>


						  </pattern>


						[![](../../minus.gif)](../../#)<metaGet>


							  <obInst>true</obInst>


							[![](../../minus.gif)](../../#)<layout>


								  <slides>Get</slides>


								[![](../../minus.gif)](../../#)<allSlidesPattern>


									  <animation>false</animation>


									  <viewModeImages>false</viewModeImages>


									  <mainPanel>false</mainPanel>


								  </allSlidesPattern>


								[![](../../minus.gif)](../../#)<activeSlidePattern>


									  <animation>false</animation>


									  <viewModeImages>false</viewModeImages>


									  <mainPanel>false</mainPanel>


								  </activeSlidePattern>


							  </layout>


						  </metaGet>


					  </tArg>


				  </SetAdHoc>


			  </s:Body>


		  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<soapenv:Body>


				[![](../../minus.gif)](../../#)<SetAdHocResult
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


					[![](../../minus.gif)](../../#)<id xmlns="** **">


						  <id>S1!M!S!AdHoc1</id>


					  </id>


					[![](../../minus.gif)](../../#)<meta xmlns="** **">


						[![](../../minus.gif)](../../#)<obInst>


							[![](../../minus.gif)](../../#)<obDesc isShortcut="**0**"
							 isLink="**0**" fullUrl="**/**"
							 ver="**1**" hf="**0**">


								  <i>ADHOC_SAMPLE</i>


								  <n>Аналитическая
								 панель</n>


								  <k>87502</k>


								  <c>8448</c>


								  <p>6714</p>


								  <h>0</h>


								  <hasPrv>0</hasPrv>


								  <ic>0</ic>


								  <isPermanent>1</isPermanent>


								  <isTemp>0</isTemp>


							  </obDesc>


						  </obInst>


						  <dirty>1</dirty>


						[![](../../minus.gif)](../../#)<Md8>


							  <activeSlideKey>2</activeSlideKey>


							[![](../../minus.gif)](../../#)<slides>


								[![](../../minus.gif)](../../#)<its>


									[![](../../minus.gif)](../../#)<it>


										  <key>1</key>


										  <id>1C069D65-46D1-471D-A1ED-DAB36359DE9B</id>


										  <visible>1</visible>


										  <name>Слайд1</name>


										  <index>0</index>


									  </it>


									[![](../../minus.gif)](../../#)<it>


										  <key>2</key>


										  <id>SD7OZR42LYHXHA2V</id>


										  <visible>1</visible>


										  <name>Слайд2</name>


										  <index>1</index>


									  </it>


								  </its>


							  </slides>


						  </Md8>


						  <autoUpdateSources>1</autoUpdateSources>


						  <calcOnChangedData>2</calcOnChangedData>


					  </meta>


				  </SetAdHocResult>


			  </soapenv:Body>


		  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "SetAdHoc" :
  {
   "tAdHocId" :
    {
     "id" : "S1!M!S!AdHoc1"
    },
   "tArg" :
    {
     "meta" :
      {
       "Md8" :
        {
         "activeSlideId" : "SD7OZR42LYHXHA2V"
        }
      },
     "pattern" :
      {
       "obInst" : "true",
       "layout" :
        {
         "activeSlideId" : "true",
         "slides" : "Set"
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "layout" :
        {
         "slides" : "Get",
         "allSlidesPattern" :
          {
           "animation" : "false",
           "viewModeImages" : "false",
           "mainPanel" : "false"
          },
         "activeSlidePattern" :
          {
           "animation" : "false",
           "viewModeImages" : "false",
           "mainPanel" : "false"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetAdHocResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!AdHoc1"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@fullUrl" : "\/",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "1",
         "@hf" : "0",
         "i" : "ADHOC_SAMPLE",
         "n" : "Аналитическая панель",
         "k" : "87502",
         "c" : "8448",
         "p" : "6714",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "1",
     "Md8" :
      {
       "activeSlideKey" : "2",
       "slides" :
        {
         "its" :
          {
           "it" :
            [
              {
               "key" : "1",
               "id" : "1C069D65-46D1-471D-A1ED-DAB36359DE9B",
               "visible" : "1",
               "name" : "Слайд1",
               "index" : "0"
              },
              {
               "key" : "2",
               "id" : "SD7OZR42LYHXHA2V",
               "visible" : "1",
               "name" : "Слайд2",
               "index" : "1"
              }
            ]
          }
        }
      },
     "autoUpdateSources" : "1",
     "calcOnChangedData" : "2"
    }
  }
}


[![](../../Opened.gif)![](../../Closed.gif)C#](javascript:TextPopup(this))


public static SetAdHocResult SetActiveSlide(AdHocId moniker, AdhocSlides slides)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetAdHoc()
    {
        tArg = new SetAdHocMdArg()
        {
            meta = new AdHocMd()
            {
                Md8 = new AdhocMd8()
                {
                    //Смена активного слайда
                    activeSlideId = slides.its[slides.its.Length-1].id
                }
            },
            pattern = new AdHocMdPattern()
            {
                layout = new SlidesPattern()
                {
                    activeSlideId = true,
                    slides = ListOperation.Set
                }
            },
            metaGet = new AdHocMdPattern()
            {
                layout = new SlidesPattern()
                {
                    activeSlidePattern = new SlideContentPattern(),
                    allSlidesPattern = new SlideContentPattern(),
                    slides = ListOperation.Get
                }
            }
        },
        tAdHocId = moniker
    };
    //Изменение метаданных
    var result = somClient.SetAdHoc(tSet);
    return result;
}


См. также:


[Работа
 с аналитической панелью](Adhoc_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
