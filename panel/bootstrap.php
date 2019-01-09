<?php
/**
 * Created by SlimApp.
 *
 * Date: 2019-01-07
 * Time: 10:44
 */

use GoldSdk\Panel\Panel;
use GoldSdk\Panel\PanelConfiguration;

require_once __DIR__ . "/vendor/autoload.php";

define('PROJECT_DIR', __DIR__);

/** @var Panel $app */
$app = Panel::app();
$app->init(__DIR__ . "/config", new PanelConfiguration(), __DIR__ . "/cache/config");

return $app;

